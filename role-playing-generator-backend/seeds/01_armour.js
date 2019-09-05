
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('armour').del()
    .then(function () {
      // Inserts seed entries
      return knex('armour').insert([
        {name: 'Vest', type: 'Cloth', pv: 5, rating: 1, encumbrance: 1},
        {name: 'Tanned Vest', type: 'Leather', pv: 10, rating: 2, encumbrance: 2},
      ]);
    });
};
