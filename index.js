const express = require('express')
const path = require('path')  //to work with modules correctly
const app = express()
// http://localhost:3000/api/packages?limit=20&skip=0
app.get('/api/packages', function (req, res) {
  const data = JSON.parse(path.resolve(__dirname, './api/packages', 'packages.js'))
  res.send(data);
})

app.get('/api/packages', function (req, res) {
  const data = JSON.parse(path.resolve(__dirname, './api/packages', 'settings.js'))
  res.send(data);
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
