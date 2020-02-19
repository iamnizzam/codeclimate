require('dotenv').config(); 


module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'books',
    username: 'sjfxxizz',
    password: 'wNwuUDSHbRhNO7M3PGfpdb7pF3sy1KAS',
    host: 'arjuna.db.elephantsql.com',
    dialect: 'postgres'
  },

  test: {
    database: 'books',
    username: 'sjfxxizz',
    password: 'wNwuUDSHbRhNO7M3PGfpdb7pF3sy1KAS',
    host: 'arjuna.db.elephantsql.com',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
