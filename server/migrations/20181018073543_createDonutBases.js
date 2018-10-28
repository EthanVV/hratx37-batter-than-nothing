exports.up = function (knex, Promise) {
  return knex.schema.createTable('donut_bases', function (table) {
    table.increments('id').primary().unsinged();
    table.string('base');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('donut_bases');
};
