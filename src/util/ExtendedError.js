/**
 * https://gist.github.com/slavafomin/b164e3e710a6fc9352c934b9073e7216
 */

class ExtendedError extends Error{
    /**
     * @param {String} message
     * @param {Object} [content]
     */
    constructor(message, content){
        super(message)
        Object.assign(this, content)
    }
}

module.exports = ExtendedError