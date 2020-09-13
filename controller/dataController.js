const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const moment = require('moment')
const usbPort = new SerialPort('/dev/ttyACM0', { baudRate: 115200 })

const getData = async (req, res) => {
  moment.locale('es')
  const time = moment().format('LT')
  const date = moment().format('L')
  console.log(time + '_' + date)
  try {
    const parser = new Readline()
    usbPort.pipe(parser)
    usbPort.write('hola \n')
    parser.on('data', (data) => {
      console.log(data)
      let json = JSON.parse(data)
      json = {
        date: Date.now(),
        temperature: Math.round((json.temperature + Number.EPSILON) * 100) / 100,
        humidity: Math.round((json.humidity + Number.EPSILON) * 100) / 100,
        pressure: Math.round((json.pressure + Number.EPSILON) * 100) / 100,
        windSpeed: Math.round((json.windSpeed + Number.EPSILON) * 100) / 100,
        windDirection: json.windDirection,
        location: {
          latitude: json.latitude,
          longitude: json.longitude,
          altitude: json.altitude
        }
      }
      console.log(json)
      parser.end()
      res.status(200).send(json)
    })

  } catch(e) {
    res.status(500).send(e)
  }
}

module.exports = {
  getData
}