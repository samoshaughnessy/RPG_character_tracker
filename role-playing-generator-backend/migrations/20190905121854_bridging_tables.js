
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users_games', function(table){
            table.increments('id').primary();
            table.integer('user_id').unsigned();
            table.foreign('user_id').references('users.id');
            table.integer('game_id').unsigned();
            table.foreign('game_id').references('game.id');
        }).createTable('characters_weapons', function(table){
            table.increments('id').primary();
            table.string('description');
            table.integer('skill').unsigned().notNull();
            table.integer('ammunition').unsigned();
            table.integer('weapon_id').unsigned();
            table.foreign('weapon_id').references('weapons.id');
            table.integer('character_id').unsigned();
            table.foreign('character_id').references('character.id');
        }).createTable('characters_armour', function(table){
            table.increments('id').primary();
            table.string('description');
            table.integer('armour_id').unsigned();
            table.foreign('armour_id').references('armour.id');
            table.integer('character_id').unsigned();
            table.foreign('character_id').references('character.id');
        }).createTable('character_skills', function(table){
            table.increments('id').primary();
            table.integer('character_id').unsigned();
            table.foreign('character_id').references('character.id');
            table.integer('skill_id').unsigned();
            table.foreign('skill_id').references('skills.id');
            table.integer('skill_level').notNull().unsigned();
        }).createTable('character_magic', function(table){
            table.increments('id').primary();
            table.integer('character_id').unsigned();
            table.foreign('character_id').references('character.id');
            table.integer('magic_id').unsigned();
            table.foreign('magic_id').references('magic.id');
            table.integer('skill_level').notNull().unsigned();
        }).createTable('spells', function(table){
            table.increments('id').primary();
            table.integer('magic_id').unsigned();
            table.foreign('magic_id').references('magic.id');
            table.string('name').notNull().unique();
            table.integer('level_required').unsigned().notNull();
            table.integer('damage').unsigned().notNull();
            table.integer('manaCost').unsigned().notNull();
            table.integer('edge').unsigned().notNull();
        })
    ])
  
};

exports.down = function(knex, Promise) {
    return Promise.all([ knex.schema.dropTable('spells').dropTable('character_magic').dropTable('character_skills').dropTable('characters_armour').dropTable('characters_weapons').dropTable('users_games')])

};
