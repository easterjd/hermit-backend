const express = require('express')
const app = express()
const { PORT = 5000, NODE_ENV = 'development' } = process.env

if (NODE_ENV === 'development') {
    require('dotenv').load()
    app.use(require('morgan')('dev'))
}

app.use(require('body-parser').json())
app.use(require('cors')())

app.use('/api/users', require('./routes/users'))
app.use('/api/trails', require('./routes/trails'))
app.use('/api/favs', require('./routes/favs'))
app.use('/api/comments', require('./routes/comments'))
app.use('/api/buzz', require('./routes/buzz'))
// app.use('/api/images', require('./routes/images'))

app.use((req, res, next) => {
    next({ status: 404, error: `Could not ${req.method} ${req.url}`})
})

app.use((err, req, res, next) => {
    if (NODE_ENV === 'development') console.error(err)

    const message = 'Something went wrong.'
    const { status = 500, error = message } = err

    res.status(status).json({status, error})
})

if (NODE_ENV !== 'testing') {
    const listener = () => console.log(`Listening on port ${PORT}`)
    app.listen(PORT, listener)
}

module.exports = app