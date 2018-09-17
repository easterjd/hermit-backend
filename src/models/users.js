const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

async function create ({ password, ...body }) {
    const hashed = await promisify(bcrypt.hash)(password, 8)
    return db('users')
        .insert({ ...body, password: hashed })
        .returning('*')
        .then(([response]) => response)
}

async function login ({ email, password }) {
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

module.exports = {
    create,
    login,
    get
}