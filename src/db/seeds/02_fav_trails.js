
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fav_trails').del()
    .then(function () {
      // Inserts seed entries
      return knex('fav_trails').insert([
        {id: 1, user_id: 1, trail_id: 7021679},
        {id: 2, user_id: 1, trail_id: 7001016},
        {id: 3, user_id: 2, trail_id: 7001016}
      ]);
    })
    .then(function () {
      return knex.raw(`SELECT setval('fav_trails_id_seq', (SELECT MAX(id) FROM fav_trails));`)
    })
};
