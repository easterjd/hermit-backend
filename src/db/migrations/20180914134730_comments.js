
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', table => {
        table.increments()
        table.integer('user_id').references('users.id').onDelete('CASCADE')
        table.integer('trail_id').notNullable()
        table.string('body').notNullable()
        table.string('image_id')
        table.timestamps(true,true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
