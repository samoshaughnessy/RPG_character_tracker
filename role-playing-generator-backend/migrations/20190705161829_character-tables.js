
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('characterStats', function(table){
            table.increments('id').primary();
            table.integer('strength').notNull();
            table.integer('dexterity').notNull();
            table.integer('intelligence').notNull();
            table.integer('concentration').notNull();
            table.integer('charisma').notNull();
            table.integer('character_id').unsigned();
            table.foreign('character_id').references('character.id');
        }).createTable('characterStatus', function(table){
            table.increments('id').primary();
            table.integer('hp').notNull();
            table.integer('mana').notNull();
            table.integer('stamina').notNull();
            table.integer('cool').notNull();
            table.integer('gold').notNull();
            table.integer('silver').notNull();
            table.integer('copper').notNull();
            table.integer('character_id').unsigned();
            table.foreign('character_id').references('character.id');
        }).createTable('characterInventory', function(table){
            table.increments('id').primary();
            table.string('item').notNull();
            table.integer('amount').notNull();
            table.string('description');
            table.integer('character_id').unsigned();
            table.foreign('character_id').references('character.id');
        })
    ])
  
};

exports.down = function(knex, Promise) {
    return Promise.all([ knex.schema.dropTable('characterInventory').dropTable('characterStatus').dropTable('characterStats') ])
  
};
