const addressesTableName = 'addresses';

exports.up = function(knex) {
  return knex.schema.createTable(addressesTableName, table => {
    table.string('id', 16).notNullable().primary();
    table.string('user_id').notNullableable().references('users.id');
    table.string('address').notNullableable();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(null);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable(addressesTableName);
};
