class MathRoute{
    /**
     * @param {MathRepo} mathRepo
     */
    constructor(mathRepo){
        this._mathRepo = mathRepo
    }

    async calculate(req, res){
        let podcastId = req.body

        let math = await this._mathRepo.getMath(podcastId)

        res
            .type('application/xml')
            .send(math)
    }

    async hello(req, res){
        res.send('Hello Math!')
    }
}

module.exports = MathRoute