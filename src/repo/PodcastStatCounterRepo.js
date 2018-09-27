const moment = require('moment')

class PodcastStatCounterRepo{
    /**
     * @param {DynamoDb} db
     */
    constructor(db, config){
        this._db = db
        this._tableName = config.tableName
        // this._db = {
        //     put: util.promisify(db.put).bind(db.put)
        // }
    }

    async incCounter(id){
        let now = moment().utc()
        // pretend a new day starts at 04:00 summer/05:00 () Norwegian time
        let today = moment().utc().add(-5, 'hours')

        let a = await this._db.update({
            TableName: this._tableName ,
            Key: {
                id: id,
                counter: today.format('YYYY-MM-DD'),
            },
            UpdateExpression: 'SET ' +
            '#val = if_not_exists(#val, :zero) + :incr, ' +
            'YYYY = :YYYY, ' +
            'MM = :MM, ' +
            'DD = :DD' +
            '',
            ExpressionAttributeNames: { '#val': 'Value' },
            ExpressionAttributeValues: {
                ':incr': 1,
                ':YYYY': today.format('YYYY'),
                ':MM': today.format('MM'),
                ':DD': today.format('DD'),
                ':zero': 0
            },
            ReturnValues:"UPDATED_NEW"
        }).promise()

        let b = await this._db.update({
            TableName: this._tableName ,
            Key: {
                id: id,
                counter: now.format('YYYY HH'),
            },
            UpdateExpression: 'SET ' +
            '#val = if_not_exists(#val, :zero) + :incr, ' +
            'YYYY = :YYYY, ' +
            'HH = :HH',
            ExpressionAttributeNames: { '#val': 'Value' },
            ExpressionAttributeValues: {
                ':incr': 1,
                ':YYYY': now.format('YYYY'),
                ':HH': now.format('HH'),
                ':zero': 0
            },
            ReturnValues:"UPDATED_NEW"
        }).promise()

        return [a, b]
    }
}

module.exports = PodcastStatCounterRepo