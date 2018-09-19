const router = require('express').Router()
const ctrl = require('../controllers/favs')
const auth = require('../lib/auth')

router.get('/:trailId', auth.isLoggedIn, ctrl.favsByTrail)
router.get('/user/:id', auth.isAuthorized, ctrl.favsByUser)

router.post('/', auth.isAuthorized, ctrl.create)

router.delete('/user/:id', auth.isAuthorized, ctrl.remove)

module.exports = router