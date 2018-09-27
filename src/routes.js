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

    app.get('/podcasts/:podcastId/feed',
        route(feedRoute.getFeed.bind(feedRoute)))

    app.get('/hello',
        route(feedRoute.hello.bind(feedRoute)))
}
