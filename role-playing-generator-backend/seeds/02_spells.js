
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('spells').del()
    .then(function () {
      // Inserts seed entries
      return knex('spells').insert([
        {magic_id: 2, name: 'Heal-Self', level_required: 1, damage: 15, manaCost: 8, edge: 8},
        {magic_id: 1, name: 'Trick Opponent', level_required: 1, damage: 0, manaCost: 10, edge: 9},

      ]);
    });
};
