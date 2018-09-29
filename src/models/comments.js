const db = require('../db')

async function commentsByTrail (trailId) {
    return db('comments')
        .select('users.*', 'comments.*')
        .where({ trail_id: trailId })
        .leftJoin('users', 'comments.user_id', 'users.id')
}

async function commentsByUser (userId) {
    return db('comments')
        .where({ user_id: userId })
}

function create (body) {
    return db('comments')
        .insert({...body})
        .returning('*')
        .then(([response]) => response)
}

function update (id, body) {
    return db('comments')
        .where({ id })
        .update({
            ...body
        })
        .returning('*')
}

function remove (id) {
    return db('comments')
        .where({ id })
        .del()
}

module.exports = {
    commentsByTrail,
    commentsByUser,
    create,
    update,
    remove
}