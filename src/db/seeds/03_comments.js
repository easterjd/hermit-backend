
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, user_id: 1, trail_id: 7021679, body: "This trails is great, but gets crowded easily.", image_id: null},
        {id: 2, user_id: 1, trail_id: 7001016, body: "I've heard so many good things! Have to check it out.", image_id: null}
      ]);
    })
    .then(function () {
      return knex.raw(`SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));`)
    })
};
