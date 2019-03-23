const route = require('./util/promiseRoute')

/**
 * Register all routes in the service in this function
 *
 * @param {Container} ioc
 * @param {Router} app
 */

module.exports = function(ioc, app){
    /** @let {FeedRoute}  */
    let feedRoute = ioc['FeedRoute']
    /** @let {GarageRoute}  */
    let garageRoute = ioc['GarageRoute']

    app.get('/podcasts/:podcastId/feed',
        route(feedRoute.getFeed.bind(feedRoute)))

    app.post('/podcasts/:podcastId/count',
        route(feedRoute.incCount.bind(feedRoute)))

    app.get('/hello',
        route(feedRoute.hello.bind(feedRoute)))

    app.get('/garage/daylight/:date/',
        route(garageRoute.getDaylight.bind(garageRoute)))

    app.get('/garage/alarm/:from',
        route(garageRoute.getDaylight.bind(garageRoute)))
}
