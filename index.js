const express = require('express')
const SerialPort = require('serialport')
const readline = require('@serialport/parser-readline')
const usbPort = new SerialPort('/dev/ttyACM0', { baudRate: 115200 })
const app = express()
const port = 8000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
