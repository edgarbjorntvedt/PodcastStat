module.exports = ioc => {
    ioc.service('FeedRoute', ioc => {
        const FeedRoute = require('../route/FeedRoute')
        return new FeedRoute(ioc['FeedRepo'], ioc['PodcastStatCounterRepo'])
    })
    ioc.service('GarageRoute', ioc => {
        const GarageRoute = require('../route/GarageRoute')
        return new GarageRoute(ioc['DaylightRepo'])
    })
}