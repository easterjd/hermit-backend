
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fav_trails', table => {
      table.increments()
      table.integer('user_id').references('users.id').onDelete('CASCADE')
      table.integer('trail_id').notNullable()
      table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fav_trails')
};
