// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DATABASE,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
  },

  staging: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DATABASE,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DATABASE,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
