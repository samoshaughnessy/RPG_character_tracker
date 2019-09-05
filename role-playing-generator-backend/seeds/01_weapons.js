
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weapons').del()
    .then(function () {
      // Inserts seed entries
      return knex('weapons').insert([
        {name: 'Short sword', damage: 10, edge: 10, encumbrance: 5},
        {name: 'Bow', damage: 6, edge: 11, encumbrance: 6},
      ]);
    });
};
