const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => res.status(200).send('ok'))

router.get('/data', async (req, res) => res.send('aló'))

router.post('/administration', async(req, res) => send('aló'))