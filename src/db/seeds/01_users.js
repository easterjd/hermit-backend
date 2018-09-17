const bcrypt = require('bcryptjs')
const { promisify } = require('util')

exports.seed = async function (knex, Promise) {
  const passTest = await promisify(bcrypt.hash)('password', 8)
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'easterjd', first_name: 'Dillon', last_name: 'Easter', email: 'johndilloneaster@gmail.com', password: passTest, proff: 'Intermediate'},
        {id: 2, username: 'test', first_name: 'the', last_name: 'test', email: 'test@test.com', password: passTest, proff: 'Beginner'},
      ]);
    })
    .then(function () {
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
    })
};
