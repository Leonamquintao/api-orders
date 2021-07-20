const usersTableName = 'users';

exports.up = function(knex) {
  return knex.schema.createTable(usersTableName, table => {
    table.string('id', 16).notNullable().primary();
    table.string('full_name').notNullableable();
		table.string('email').unique().notNullable();
		table.string('password').notNullable();
		table.string('token').defaultTo(null);
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(null);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable(usersTableName);
};
