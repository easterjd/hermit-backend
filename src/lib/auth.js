const { SECRET_KEY } = process.env
const { sign, verify } = require('jsonwebtoken')
const db = require('../db')

function createToken (id) {
    const sub = { sub: { id }}
    const options = { expiresIn: '1 day' }

    return sign(sub, SECRET_KEY, options)
}

function parseToken (header) {
    const token = header && header.split('Bearer ')[1]
    return verify(token, SECRET_KEY)
}

async function isLoggedIn (req, res, next) {
    let authCheck = await parseToken(req.headers.authorization)
    authCheck ? next() : next({status: 401, error: 'Session has expired.'})
}

async function isAuthorized (req, res, next) {

}

module.exports = {
    createToken,
    parseToken,
    isLoggedIn,
    isAuthorizeds
}