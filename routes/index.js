const { Router } = require('express')
const { getData } = require('../controller/dataController')

const router = Router()

router.get('/', (req, res) => res.status(200).send('ok'))

router.get('/data', getData)

router.post('/administration', async(req, res) => send('aló'))

module.exports = router