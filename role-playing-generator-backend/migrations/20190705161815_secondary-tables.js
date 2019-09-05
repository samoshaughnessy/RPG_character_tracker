
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('character', function(table){
            table.increments('id').unsigned().primary();
            table.string('name').notNull();
            table.string('description');
            table.timestamps(false, true);
            table.integer('game_id').unsigned();
            table.foreign('game_id').references('game.id');
            table.integer('user_id').unsigned();
            table.foreign('user_id').references('users.id');
        }).createTable('weapons', function(table){
            table.increments('id').primary();
            table.string('name').notNull();
            table.integer('damage').unsigned().notNull();
            table.integer('edge').unsigned().notNull();
            table.integer('encumbrance').unsigned().notNull();
        }).createTable('armour', function(table){
            table.increments('id').primary();
            table.string('name').notNull();
            table.string('type').notNull();
            table.integer('pv').unsigned().notNull();
            table.integer('rating').unsigned().notNull();
            table.integer('encumbrance').unsigned().notNull();
        }).createTable('skills', function(table){
            table.increments('id').primary();
            table.string('name').notNull();
            table.string('description');
        }).createTable('magic', function(table){
            table.increments('id').primary();
            table.string('warren').notNull()
            table.string('description');
        })
    ]) 
};

exports.down = function(knex, Promise) {
    return Promise.all([ knex.schema.dropTable('magic').dropTable('skills').dropTable('armour').dropTable('weapons').dropTable('character') ])
  
};
