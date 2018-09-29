const router = require('express').Router()
const ctrl = require('../controllers/comments')
const auth = require('../lib/auth')

router.get('/:trailId', auth.isLoggedIn, ctrl.commentsByTrail)
router.get('/user/:id', auth.isAuthorized, ctrl.commentsByUser)

router.post('/', auth.isLoggedIn, ctrl.create)

router.patch('/:commentId', auth.isAuthorized, ctrl.update)

router.delete('/:commentId', auth.isAuthorized, ctrl.remove)

module.exports = router