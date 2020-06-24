const express = require('express')
const { createApod, getApods } = require('../controllers/nasacontroller')

const router = express.Router()

router.getApods('/nasa/getapods', getApods)
router.postApod('/nasa/postapod', createApod)

module.exports = router
