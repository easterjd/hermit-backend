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
    try {
        const authorization = req.headers.authorization
        if (!authorization) {
            return next({ status: 401, error: 'You must login to access this data.'})
        }

        const token = parseToken(authorization)
        const userId = token.sub.id
        const reqUser = parseInt(req.params.id) || parseInt(req.body.user_id)
        console.log(userId, reqUser)
        if (userId !== reqUser) {
            return next({ status: 401, error: 'You are not authorized to access this data.'})
        }

        next()
    } catch (e) {
        next({ status: 401, error: 'Session has expired. Please login again.'})
    }
}

module.exports = {
    createToken,
    parseToken,
    isLoggedIn,
    isAuthorized
}