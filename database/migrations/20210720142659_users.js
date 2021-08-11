const usersTableName = 'users';

exports.up = function(knex) {
  return knex.schema.createTable(usersTableName, table => {
    table.string('id', 36).notNullable().primary();
    table.string('full_name').notNullable();
		table.string('email').unique().notNullable();
		table.string('document').unique().notNullable();
		table.string('birth_date').defaultTo(null);
		table.string('password').notNullable();
		table.string('token').defaultTo(null);
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(null);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable(usersTableName);
};
