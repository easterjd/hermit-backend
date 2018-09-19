const model = require('../models/favs')

async function favsByTrail (req, res, next) {
    try {
        const response = await model.favsByTrail(req.params.trailId)
        res.json({favs: response[0].count})
    } catch (e) {
        next({ status: 401, error: 'Cannot retreive favorites.'})
    }
}

async function favsByUser (req, res, next) {
    try {
        const response = await model.favsByUser(req.params.id)
        res.json({favs: response})
    } catch (e) {
        next({ status: 401, error: 'Cannot retreive favorites.'})
    }
}

async function create (req, res, next) {
    try {
        const response = await model.create(req.body)
        res.json({fav: response})
    } catch (e) {
        next({ status: 401, error: 'Cannot create favorite.'})
    }
}

async function remove (req, res, next) {
    try {
        const response = await model.remove(req.body)
        res.json({fav: response})
    } catch (e) {
        next({ status: 401, error: 'Cannot delete favorite.'})
    }
}

module.exports = {
    favsByTrail,
    favsByUser,
    create,
    remove
}