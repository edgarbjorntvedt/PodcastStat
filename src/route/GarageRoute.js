const moment = require('moment')

class FeedRoute{
    /**
     * @param {DaylightRepo} daylightRepo
     */
    constructor(daylightRepo){
        this._daylightRepo = daylightRepo
    }

    async getDaylight(req, res){
        let date = req.params.date

        let {sunrise, sunset}= await this._daylightRepo.getDaylight(date)

        res
            .type('application/json')
            .send({
                sunrise: sunrise.toDate(),
                sunset: sunset.toDate()
            })
    }

    async getGarage(req, res){
        let from = moment(req.params.from)
        if (!from.isValid()) {
            throw new Error('unable to parse from as a timestamp, received: ' + req.params.from)
        }

        let {sunrise, sunset} = await this._daylightRepo.getDaylight('today')

        res
            .type('application/json')
            .send({
                sunrise: sunrise.toDate(),
                sunset: sunset.toDate()
            })
    }
}

module.exports = FeedRoute