class FeedRoute{
    /**
     * @param {FeedRepo} feedRepo
     * @param {PodcastStatCounterRepo} podcastStatCounterRepo
     */
    constructor(feedRepo, podcastStatCounterRepo){
        this._feedRepo = feedRepo
        this._podcastStatCounterRepo = podcastStatCounterRepo
    }

    async getFeed(req, res){
        let podcastId = req.params.podcastId

        let feed = await this._feedRepo.getFeed(podcastId)

        await this._podcastStatCounterRepo.incCounter(podcastId)

        res
            .type('application/xml')
            .send(feed)
    }

    async hello(req, res){
        res.send('Hello Feed!')
    }
}

module.exports = FeedRoute