
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function(table){
        table.increments('id').unsigned.primary();
        table.string('email').notNull().unique();
        table.string('password').notNull();
    }).createTable
  
};

exports.down = function(knex, Promise) {
  
};
