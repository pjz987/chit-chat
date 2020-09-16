const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('is this thing on?')
})

module.exports = port => {
  app.listen(port)
}
