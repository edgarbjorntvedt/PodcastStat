module.exports = ioc => {
    ioc.service('Logger', ioc => {
        return require('njs-tfso-logging').createLogger(ioc['CONFIG']['LOGGER'], ioc['CLS_NAMESPACE'])
    })

    ioc.service('ApiRequestFactory', ioc => {
        const ApiRequestFactory = require('njs-tfso-request').ApiRequestFactory
        return new ApiRequestFactory(ioc['Logger'])
    })

    ioc.service('aws-sdk', ioc => {
        const AWS = require('aws-sdk')
        AWS.config.update({ region: "eu-west-1" });
        return AWS
    })

    ioc.service('DynamoDb', ioc => {
        const AWS = ioc['aws-sdk']
        const dynamoDb = new AWS.DynamoDB.DocumentClient()
        return dynamoDb
    })
}