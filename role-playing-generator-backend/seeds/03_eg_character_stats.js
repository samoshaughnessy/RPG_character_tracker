
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('characterStats').del().then(function(){
      knex('characterStatus').del().then(function(){
        knex('characterInventory').del()
      })
    })
  ])
    .then(function () {
      // Inserts seed entries
      return Promise.all([

        knex('characterStats').insert([
          { strength: 7, dexterity: 8, intelligence: 4, concentration: 9, charisma: 6, character_id: 1},

        ]),
        knex('characterStatus').insert([
          { hp: 80, mana: 40, stamina: 58, cool: 9, gold: 6, silver: 300, copper: 1200, character_id: 1},

        ]),
        knex('characterInventory').insert([
          { item: 'Grappling Hook', amount: 3, description: '-2 Difficultly while scaling wall', character_id: 1},

        ]),
      ])
    });
};
