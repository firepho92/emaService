const express = require('express')
const SerialPort = require('serialport')
const readline = require('@serialport/parser-readline')
const bodyParser = require('body-parser')
const axios = require('axios')

const routes = require('./routes')
const usbPort = new SerialPort('/dev/ttyACM0', { baudRate: 115200 })
const Readline = require('@serialport/parser-readline')
const parser = new Readline()
usbPort.pipe(parser)
const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use('/', routes)

parser.on('data', (data) => {
  console.log(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
