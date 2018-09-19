
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', table => {
      table.increments()
      table.integer('user_id').references('users.id').onDelete('CASCADE')
      table.integer('trail_id').notNullable()
      table.string('trail_name').notNullable()
      table.string('image_url').notNullable()
      table.string('caption')
      table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images')
};
