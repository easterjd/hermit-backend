
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {user_id: 1, trail_id: 7021679, trail_name: "Rattlesnake Ledge", caption: 'Great day for a hike!', image_url:"http://media2.trover.com/T/57b6b8fc74a3512e1b001043/fixedw_large_4x.jpg"}
      ]);
    });
};
