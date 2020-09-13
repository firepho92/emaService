const SerialPort = require('serialport')

const getData = async (req, res) => {
  try { 
    const port = new SerialPort('/dev/ttyACM0', { baudRate: 115200 })
  } catch(e) {
    res.status(500).send(e)
  }
}

module.exports = {
  getData
}