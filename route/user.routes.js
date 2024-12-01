let express = require('express')
let route = express.Router()


route.get("/about", (req, res) => {
  res.statusCode = 200;
  res.send('helloro')
})
route.get("/contact", (req, res) => {
  res.statusCode = 200;
  res.send('komio')
})

module.exports = route;