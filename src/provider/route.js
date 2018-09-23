module.exports = ioc => {
    ioc.service('FeedRoute', ioc => {
        const FeedRoute = require('../route/FeedRoute')
        return new FeedRoute(ioc['FeedRepo'])
    })
}