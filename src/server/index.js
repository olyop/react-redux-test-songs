const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

const logger = require("morgan")
const responseTime = require("response-time")
const helmet = require("helmet")
const compression = require("compression")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const createError = require("http-errors")

const { DB_URL, MONGOOSE_CONFIG } = require("../globals")

// import api router
const api = require("./api")

const app = express()

const db = mongoose.connect(DB_URL, MONGOOSE_CONFIG)

// middleware stack
app.use(logger("dev"))
app.use(responseTime())
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// serve static website
app.use(express.static(path.resolve("build")))

// route api requests
app.use("/api", api)

// catch 404 and forward to error handler
app.use((err, req, res, nxt) => nxt(createError(404)))

// error handler
app.use((err, req, res, nxt) => {
  res.status(err.status || 500)
  res.send(err.stack)
})

module.exports = app
