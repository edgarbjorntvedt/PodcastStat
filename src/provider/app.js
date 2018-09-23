const App = require('njs-tfso-app')

module.exports = ioc => {
    ioc.service('App', ioc => {
        const logger = ioc['Logger']

        /** @var {Server} server */
        const server = ioc['Server']

        async function onBoot(){
            await server.start()
        }

        async function onShutdown(){
            await server.stop()
        }

        return new App(logger, onBoot, onShutdown)
    })
}