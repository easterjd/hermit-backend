# hermit (Back-end)
Back-end for https://github.com/easterjd/hermit-frontend

## Installation
- Fork and clone
- `npm install`
- Add your own .env file with a `SECRET` environment variable

## Database Setup
- Make sure you have PostgreSQL
- Create a database on your local called `hermit_backend`
- `npm run knex migrate:latest`
- `npm run knex seed:run`

### Postman Documentation

Check the Postman documentation for information on the routes, body data types, and response types.
Routes: https://documenter.getpostman.com/view/4863350/RWgozeon
