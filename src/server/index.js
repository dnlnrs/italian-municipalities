const debug = require('debug')('app')

const app = require('polka')()

const serverPort = process.env.SERVER_PORT || 3000
const serverHost = process.env.SERVER_HOST || 'localhost'

app
  .get('/', (req, res) => {
    res.end(JSON.stringify({ version: require('../../package.json').version }))
  })
  .listen(serverPort, serverHost, err => {
    if (err) throw err
    debug(`Server running on port ${serverPort}`)
  })