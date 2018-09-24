const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

async function create ({ password, ...body }) {
    const hashed = await promisify(bcrypt.hash)(password, 8)
    console.log('one half')
    return db('users')
        .insert({ ...body, password: hashed })
        .returning('*')
        .then(([response]) => response)
}

async function login ({ email, password }) {
    console.log(email, password)
    return db('users')
        .where({ email })
        .then(async ([ user ]) => {
            if (!user) throw new Error()
            const isValid = await promisify(bcrypt.compare)(password, user.password)
            if (!isValid) throw new Error()

            return user
        })
}

async function get (id) {
    return db('users')
        .where({ id })
        .then(([ user ]) => user)
}

async function patch (id, body) {
    return db('users')
        .where({ id })
        .update({
            ...body
        })
        .returning('*')
}

module.exports = {
    create,
    login,
    get,
    patch
}