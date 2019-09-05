
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('character').del()
    .then(function () {
      // Inserts seed entries
      return knex('character').insert([
        {name: 'JohnDoeNotaFakName', description: 'Assassin - aspiring mage', user_id: 2, game_id: 1},
      ]);
    });
};
