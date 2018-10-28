
exports.up = function(knex, Promise) {
  return knex.schema.createTable('toppings', function(table) {
    table.increments('id').primary().unsigned();
    table.string('name');
    table.decimial('price');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  
};
