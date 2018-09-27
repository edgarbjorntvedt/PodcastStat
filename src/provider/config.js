const env = require('getenv')

module.exports = ioc => {
    ioc.service('CONFIG', ioc => {
        let host = env.string('HOST', 'donotknow.com')
        let nodeEnv = env.string('NODE_ENV', 'production')

        return {
            NODE_ENV:     nodeEnv,
            HOST:         host,
            VERSION:      env.string('BuildVersion', '1.0.0'),
            USE_CORS:     !(nodeEnv === 'production'),
            PORT:         env.int('PORT', 3000),
            LOG_REQUESTS: env.boolish('LOG_REQUESTS', true),
            LOGGER: {
                NODE_ENV:          nodeEnv,
                HOST:              host,
                LOG_LEVEL:         env.string('LOG_LEVEL', 'warn'),
                LOG_LEVEL_CONSOLE: env.string('LOG_LEVEL_CONSOLE', 'info'),
                LOG_LEVEL_SPLUNK:  env.string('LOG_LEVEL_SPLUNK', 'info'),
                LOG_TO_CONSOLE:    env.boolish('LOG_TO_CONSOLE', true),
                LOG_TO_ROLLBAR:    env.boolish('LOG_TO_ROLLBAR', false),
                LOG_TO_SPLUNK:     env.boolish('LOG_TO_SPLUNK', false),
                LOG_CLEAN_CONSOLE: env.boolish('LOG_CLEAN_CONSOLE', true),
                LOG_PERFORMANCE:   env.boolish('LOG_PERFORMANCE', true),
                LOG_SCRUB_HEADERS: env.array('LOG_SCRUB_HEADERS', 'string', ['cookie']),
                LOG_SCRUB_BODY:    env.boolish('LOG_SCRUB_BODY', true)
            },
            PODCAST_FEED: {
                host:     env.string('PODCAST_FEED_HOST', 'PODCAST_FEED.com'),
                path:     env.string('PODCAST_FEED_PATH', '/feed.xml'),
                protocol: env.string('PODCAST_FEED_PROTOCOL', 'http:'),
                port:     env.int('PODCAST_FEED_PORT', 80)
            },
            PODCASTSTATCOUNTER: {
                tableName: env.string('tableName')
            }
        }
    })
}
