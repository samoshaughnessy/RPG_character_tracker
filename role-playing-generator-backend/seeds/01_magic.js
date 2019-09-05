
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('magic').del()
    .then(function () {
      // Inserts seed entries
      return knex('magic').insert([
        {warren: 'Mockra', description: 'Spells of shadow'},
        {warren: 'Denul', description: 'Spells of Healing'},


      ]);
    });
};
