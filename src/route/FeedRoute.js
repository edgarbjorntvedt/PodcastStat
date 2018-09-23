class FeedRoute{
    /**
     * @param {FeedRepo} feedRepo
     */
    constructor(feedRepo){
        this._feedRepo = feedRepo
    }

    async getFeed(req, res){
        let feed = await this._feedRepo.getFeed()

        res
            .type('application/xml')
            .send(feed)
    }

    async hello(req, res){
        res.send('Hello Feed!')
    }
}

module.exports = FeedRoute