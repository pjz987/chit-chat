const express = require('express')
const path = require('path')
const app = express()
const TEST_ENV_VAR = process.env.TEST_ENV_VAR

app.use(express.static(path.join(__dirname, 'reacc/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/reacc/build/index.html'), err => {
    if (err) res.status(500).send(err)
  })
})

app.get('/', (req, res) => {
  res.send('is this thing on?', TEST_ENV_VAR)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('reacc/build'))
}

module.exports = port => {
  app.listen(port)
}
