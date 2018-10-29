
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('toppings').del()
    .then(function () {
      // Inserts seed entries
      return knex('toppings').insert([
        { name: 'Rainbow Sprinkles', price: 0.50,},
        { name: 'Chocolate Sprinkes', price: 0.50 },
        { name: 'Chopped Peanuts', price: 1.00},
        { name: 'Choclate Chips', price: 0.75},
        { name: 'Coconut Flakes', price: 1.00 }
      ]);
    });
};
