const productsTableName = 'products';

exports.up = function(knex) {
  return knex.schema.createTable(productsTableName, table => {
    table.string('id', 16).notNullable().primary();
    table.string('name').notNullable();
		table.string('description').notNullable();
		table.decimal('price', 19, 2).notNullable().defaultTo(0.00);
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(null);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable(productsTableName);
};
