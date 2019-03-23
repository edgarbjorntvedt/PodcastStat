module.exports = ioc => {
    ioc.service('FeedRoute', ioc => {
        const FeedRoute = require('../route/FeedRoute')
        return new FeedRoute(ioc['FeedRepo'], ioc['PodcastStatCounterRepo'])
    })
    ioc.service('MathRoute', ioc => {
        const MathRoute = require('../route/MathRoute')
        return new MathRoute(ioc['MathRepo'])
    })
}