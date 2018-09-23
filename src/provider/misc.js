module.exports = ioc => {
    ioc.service('Logger', ioc => {
        return require('njs-tfso-logging').createLogger(ioc['CONFIG']['LOGGER'], ioc['CLS_NAMESPACE'])
    })

    ioc.service('ApiRequestFactory', ioc => {
        const ApiRequestFactory = require('njs-tfso-request').ApiRequestFactory
        return new ApiRequestFactory(ioc['Logger'])
    })
}