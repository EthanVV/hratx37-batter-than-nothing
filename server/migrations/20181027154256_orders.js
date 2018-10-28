
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function (table) {
    table.increments('id').primary().unsinged();
    table.string('Customer');
    
    table.timestamps(true, true);
});
};

exports.down = function(knex, Promise) {
  
};
