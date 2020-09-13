const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')

const getData = async (req, res) => {
  try { 
    const usbPort = new SerialPort('/dev/ttyACM0', { baudRate: 115200 })
    const parser = new Readline()
    port.pipe(parser)
    port.write('hola \n')
    parser.on('data', (data) => {
      console.log(data)
    })

  } catch(e) {
    res.status(500).send(e)
  }
}

module.exports = {
  getData
}