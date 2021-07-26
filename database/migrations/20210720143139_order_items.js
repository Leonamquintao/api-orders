const orderItemsTableName = 'order_items';

exports.up = function(knex) {
  return knex.schema.createTable(orderItemsTableName, table => {
    table.string('id', 16).notNullable().primary();
    table.string('order_id').notNullable().references('orders.id');
    table.string('product_id').notNullable().references('products.id');
    table.integer('quantity').notNullable().defaultTo(0);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable(orderItemsTableName);
};

