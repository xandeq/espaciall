const express = require('express')
const { createApod, getApods } = require('../controllers/nasacontroller')

const router = express.Router()

router.get('/', getApods)
router.post('/nasa/createApod', createApod)

module.exports = router
