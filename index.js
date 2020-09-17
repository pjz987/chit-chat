const port = process.env.PORT || 8000
const { startServer } = require('./app')
const herokuTest = require('./heroku-test')

// herokuTest(port)
startServer(port)
