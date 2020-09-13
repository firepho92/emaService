const { Router } = require('express')

const router = Router()

router.get('/data', async (req, res) => res.send('aló'))

router.post('/administration', async(req, res) => send('aló'))