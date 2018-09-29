const model = require('../models/comments')

async function commentsByTrail (req, res, next) {
    try {
        const response = await model.commentsByTrail(req.params.trailId)
        res.json({comments: response})
    } catch (e) {
        console.log(e)
        next({ status: 401, error: 'Cannot retreive comments for this trail.'})
    }
}

async function commentsByUser (req, res, next) {
    try {
        const response = await model.commentsByUser(req.params.id)
        res.json({comments: response})
    } catch (e) {
        next({ status: 401, error: 'Cannot retreive comments for this user.'})
    }
}

async function create (req, res, next) {
    try {
        const response = await model.create(req.body)
        res.json({comment: response})
    } catch (e) {
        next({ status: 401, error: 'Cannot create comment.' })
    }
}

async function update (req, res, next) {
    try {
        const response = await model.update(req.params.commentId, req.body)
        res.json({comment: response})
    } catch (e) {
        next({ status: 401, error: 'Cannot update comment.' })
    }
}

async function remove (req, res, next) {
    try {
        const response = await model.remove(req.params.commentId)
        res.json({comment: response})
    } catch (e) {
        next({status: 401, error: 'Cannot delete comment.'})
    }
}

module.exports = {
    commentsByTrail,
    commentsByUser,
    create,
    update,
    remove
}