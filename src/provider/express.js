const bodyParser = require('body-parser')
const express = require('express')
const Server = require('njs-tfso-express').Server
const middleware = require('njs-tfso-express')
const logging = require('njs-tfso-logging')
const registerRoutes = require('../routes')
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

module.exports = ioc => {
    ioc.service('Server', ioc => {
        return new Server(ioc['Logger'], ioc['CONFIG']['PORT'], ioc['ExpressApp'])
    })

    ioc.service('ExpressApp', ioc => {
        let app = express()

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: false}))
        // app.use(cookieParser())

        if(ioc['CONFIG']['USE_CORS']){
            app.use(cors())
        }

        if(ioc['CONFIG']['LOG_REQUESTS']){
            app.use(logging.logRequests(ioc['Logger']))
        }

        let swaggerBase = fs.readFileSync(path.resolve(__dirname, '../../swagger.base.yml'))
        let swagger = yaml.safeLoad(swaggerBase)
        app.get('/swagger.json', (req, res, next) => {
            res.json(swagger)
        })

        registerRoutes(ioc, app)

        app.use(middleware.handle404())
        app.use(middleware.handleError(ioc['Logger']))

        return app
    })
}