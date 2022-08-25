// require to use environmental variable
require('dotenv').config();
// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');
// Create connection to our database, pass in your MySQL information for username and password
let sequelize;
// Process.env.JAWSDB_URL is variable created by Heroku in production
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,    //make sure DB_NAME,DB_USER,DB_PASSWORD are matched with .env
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
      }
    );
  }

module.exports = sequelize;