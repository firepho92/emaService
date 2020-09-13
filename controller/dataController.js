const SerialPort = require('serialport')

const port = new SerialPort('/dev/ttyACM0', { baudRate: 115200 })
const getData = async (req, res) => {
  
}

module.exports = {
  getData
}