const path = require('path')

require('dotenv').config({silent: true, path: path.resolve(__dirname, './.env')})

const ioc = require('./src/createContainer')()
ioc['App'].boot()