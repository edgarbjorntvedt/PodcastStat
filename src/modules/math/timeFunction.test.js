const chai = require('chai')
chai.should()

const math = require('mathjs')
const timeFunction = require('./timeFunction')

describe('timeFunction', () => {
    beforeEach(async () => {
    })

    describe('when executing', () => {

        beforeEach(async () => {
        })

        it('should create correct statusContainer', async () => {
            timeFunction()
        })

    })
})


describe('mathjs', () => {
    describe('when using functions', () => {
        it('should run a custom function', async () => {
            const parser = math.parser()
            let f_x = 'f(x, y) = x^y'
            parser.eval(f_x)
            parser.eval('f(2, 3)').should.equal(8)

            math.parse(f_x).toTex().should.equal('\\mathrm{f}\\left(x,\\mathrm{y}\\right):={ x}^{ y}')

            /**
             * live demo to view the function
             * https://www.mathjax.org/#demo
             */
        })
    })
})