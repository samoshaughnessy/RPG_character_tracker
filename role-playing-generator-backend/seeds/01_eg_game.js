
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        { name: 'Malazan Book of the Fallen', description: 'Fight against the crippled god'},

      ]);
    })
};
