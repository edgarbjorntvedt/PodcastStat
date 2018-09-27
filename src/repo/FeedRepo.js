class FeedRepo{
    /**
     * @param {ApiRequestFactory} api
     * @param {object} config
     */
    constructor(api, config){
        this._api = api
        this._apiProtocol = config.protocol
        this._apiHost = config.host
        this._apiPath = config.path
        this._apiPort = config.port
    }

    getFeed(podcastId){
        return this._api.doRequest({
            protocol: this._apiProtocol,
            hostname: this._apiHost,
            port: this._apiPort,
            path: '/' + podcastId + this._apiPath,
            method: 'GET'
        },
        {
            parser: a => a
        }
        )
    }
}

module.exports = FeedRepo