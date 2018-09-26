const router = require('express').Router()
const ctrl = require('../controllers/buzz')
const auth = require('../lib/auth')

router.post('/', ctrl.getBuzz)

module.exports = router