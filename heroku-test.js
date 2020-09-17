const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'), err => {
    if (err) res.status(500).send(err)
  })
})

app.get('/', (req, res) => {
  res.send('is this thing on?')
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('reacc/build'))
}

module.exports = port => {
  app.listen(port)
}
