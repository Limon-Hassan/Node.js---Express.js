const express = require('express')
const app = express()
let userRoute = require('./route/user.routes')

app.use("/api/user",userRoute)
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/Home.html')
})
app.use((req, res) => {
  res.send("404 !! not found")
})


module.exports = app;