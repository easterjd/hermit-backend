
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, user_id: 1, trail_id: 7021679, trail_name: "Rattlesnake Ledge", body: "This trails is great, but gets crowded easily.", image_id: null},
        {id: 2, user_id: 1, trail_id: 7001016, trail_name: "Mt. Si", body: "I've heard so many good things! Have to check it out.", image_id: null},
        {id: 3, user_id: 2, trail_id: 7027132, trail_name: "Steep Ravine - Matt Davis Loop", body: "I've heard so many good things! Have to check it out.", image_id: null},
        {id: 4, user_id: 1, trail_id: 7027132, trail_name: "Steep Ravine - Matt Davis Loop", body: "Let's make more test comments!", image_id: null}
      ]);
    })
    .then(function () {
      return knex.raw(`SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));`)
    })
};
