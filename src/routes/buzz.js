const router = require('express').Router()
const ctrl = require('../controllers/buzz')
const auth = require('../lib/auth')

router.post('/', auth.isLoggedIn, ctrl.getBuzz)

module.exports = router