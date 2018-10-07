const router = require('express').Router()
const ctrl = require('../controllers/buzz')

router.post('/', ctrl.getBuzz)

module.exports = router