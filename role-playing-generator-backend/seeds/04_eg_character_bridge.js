exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('users_games').del().then(function(){
      knex('characters_weapons').del().then(function(){
        knex('characters_armour').del().then(function(){
          knex('characters_skills').del().then(function(){
            knex('character_magic').del()
          })
        })
      })
    })
  ])
    .then(function () {
      // Inserts seed entries
      return Promise.all([

        knex('users_games').insert([
          { user_id: 2, game_id: 1 },
        ]),
        knex('characters_weapons').insert([
          {description: 'A knicked and battered sword', skill: 4, ammunition: 0, weapon_id: 1, character_id: 1}
        ]),
        knex('characters_armour').insert([
          {description: 'Malazan coloured, 7th Legion', armour_id: 2, character_id: 1}
        ]),
        knex('character_magic').insert([

        ]),
        knex('character_skills').insert([
          {character_id: 1, skill_id: 1, skill_level: 3},
          {character_id: 1, skill_id: 2, skill_level: 2},
          {character_id: 1, skill_id: 3, skill_level: 4},
          {character_id: 1, skill_id: 4, skill_level: 3}

        ])

      ])
    });
};
