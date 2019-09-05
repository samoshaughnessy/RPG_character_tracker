
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function(table){
        table.increments('id').unsigned().primary();
        table.string('email').notNull().unique();
        table.string('password').notNull();
        table.boolean('gm');
    }).createTable('game', function(table){
        table.increments('id').unsigned().primary();
        table.string('name');
        table.string('description');
    })
]) 
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('game').dropTable('users')
    ])
  
};
