const express = require("express")

const app = express.Router()

// import routes


// routes
app.use("/", (req, res) => {
  res.status(200).json({ foo: "bar" })
})

module.exports = app
