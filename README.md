# hermit (Back-end)
Back-end for https://github.com/easterjd/hermit-frontend

## Installation
- Fork and clone
- `npm install`
- Add your own .env file with a `SECRET` environment variable

## Database Setup
- Make sure you have PostgreSQL
- Create a database on your local called `wrightstream_dev`
- `npm run knex migrate:latest`
- `npm run knex seed:run`

## Running the tests

Go to the postman link and review tests being run on site

### Postman Documentation

Postman has already created tests built to test all routes. The documentation will show the results.
Routes: https://documenter.getpostman.com/view/4863350/RWgozeon