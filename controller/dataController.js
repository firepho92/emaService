const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const usbPort = new SerialPort('/dev/ttyACM0', { baudRate: 115200 })

const getData = async (req, res) => {
  try { 
    const parser = new Readline()
    usbPort.pipe(parser)
    usbPort.write('hola \n')
    parser.on('data', (data) => {
      parser.end()
      res.status(200).send(data)
    })

  } catch(e) {
    res.status(500).send(e)
  }
}

module.exports = {
  getData
}