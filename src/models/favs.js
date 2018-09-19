const db = require('../db')

async function favsByTrail (trailId) {
    return db('fav_trails')
        .where({ trail_id: trailId })
        .count()
}

async function favsByUser (user_id) {
    return db('fav_trails')
        .where({ user_id })
}

async function create (body) {
    return db('fav_trails')
        .insert({...body})
        .returning('*')
        .then(([response]) => response)
}

async function remove ({ trail_id }) {
    return db('fav_trails')
        .where({ trail_id })
        .del()
}

module.exports = {
    favsByTrail,
    favsByUser,
    create,
    remove
}