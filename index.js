const serverless = require('serverless-http');
const path = require('path')

require('dotenv').config({silent: true, path: path.resolve(__dirname, './.env')})

const ioc = require('./src/createContainer')()

const app = ioc['ExpressApp']

module.exports.handler = serverless(app);