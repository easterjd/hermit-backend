// Update with your config settings.
if (process.env.NODE_ENV !== 'production') require('dotenv').load()
const { DATABASE_URL, NODE_ENV } = process.env

const path = require('path')
const config = {
    client: 'pg',
    connection: 'postgres://igctqkogkeepzo:175aff6984db830db306f8fe9ccb5504f10bc374c5526723f73cc0a15000d4b2@ec2-54-227-244-12.compute-1.amazonaws.com:5432/d2jsq9gniue4cl',
    migrations: {
        directory: path.join('src', 'db', 'migrations')
    },
    seeds: {
        directory: path.join('src', 'db', 'seeds')
    }
}

module.exports = {
    development: config,
    production: config,
    testing: { ...config, connection: DATABASE_URL.replace('_dev', '_test') }
}

