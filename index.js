const port = 8000
const { startServer } = require('./app')
const herokuTest = require('./heroku-test')

herokuTest(port)
