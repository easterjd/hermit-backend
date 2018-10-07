const model = require('../models/users')
const auth = require('../lib/auth')

async function signup (req, res, next) {
    try {
        console.log('one')
        const response = await model.create(req.body)
        console.log('two')
        const token = auth.createToken(response.id)

        res.json({ token, id: response.id })
    } catch (e) {
        next({ status: 401, error: 'User could not be registered.' })
    }
}

async function login (req, res, next) {
    try {
        const response = await model.login(req.body)
        const token = auth.createToken(response.id)

        res.json({ token, id: response.id })
    } catch (e) {
        next({ status: 401, error: 'Email or password is incorrect.' })
    }
}

async function check (req, res, next) {
    res.json({ checked: true })
}

async function get (req, res, next) {
    try {
        const response = await model.get(req.params.id)
        res.json({user: response})
    } catch (e) {
        next({ status: 401, error: 'User does not exist.'})
    }
}

async function patch (req, res, next) {
    try {
        const response = await model.patch(req.params.id, req.body)
        res.json({user: response[0]})
    } catch (e) {
        next({ status: 401, error: 'Unable to update user.'})
    }
}

module.exports = {
    signup,
    login,
    check,
    get,
    patch
}