module.exports = (ioc) => {
    ioc.service('FeedRepo', ioc => {
        const FeedRepo = require('../repo/FeedRepo')
        return new FeedRepo(ioc['ApiRequestFactory'], ioc['CONFIG']['PODCAST_FEED'])
    })
    ioc.service('PodcastStatCounterRepo', ioc => {
        const PodcastStatCounterRepo = require('../repo/PodcastStatCounterRepo')
        return new PodcastStatCounterRepo(ioc['DynamoDb'], ioc['CONFIG']['PODCASTSTATCOUNTER'])
    })
    ioc.service('DaylightRepo', ioc => {
        const DaylightRepo = require('../repo/DaylightRepo')
        return new DaylightRepo(ioc['ApiRequestFactory'], ioc['CONFIG']['DAYLIGHT_API'])
    })
}