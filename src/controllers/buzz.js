const model = require('../models/buzz')

async function getBuzz (req, res, next) {
    try {
        const response = await model.getBuzz(req.body)
        res.json({data: response})
    } catch (e) {
        next({ status: 401, error: e})
    }
}

module.exports = {
    getBuzz
}