const moment = require('moment')

class DaylightRepo{
    /**
     * @param {ApiRequestFactory} api
     * @param {object} config
     */
    constructor(api, config){
        this._api = api
        this._apiProtocol = config.protocol
        this._apiHost = config.host
        this._apiPath = config.path
        // this._apiPort = config.port
    }

    async getDaylight(date){
        let {sunrise, sunset} = await this._api.doRequest({
            protocol: this._apiProtocol,
            hostname: this._apiHost,
            path: this._apiPath,
            method: 'GET'
        },
        {
            // parser: a => a
            query: {
                lat: '59n.1822973a',
                lng: '9.6372958',
                date: date || 'today',
                formatted:0
            }
        }).then(res =>{
            if (res.status !== 'OK'){
                throw new Error(this._apiHost + ' returns status: ' +res.status)
            }
            return res.results
        })

        return {
            sunrise: moment(sunrise, moment.ISO_8601, true),
            sunset: moment(sunset, moment.ISO_8601, true)
        }
    }
}

module.exports = DaylightRepo