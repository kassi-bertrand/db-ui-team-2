/* This is importing the mysql module and the dotenv module. */
const mysql = require('mysql');
require("dotenv").config();
/* This is the configuration for the database. */
module.exports = {
    development: {
      client: 'mysql',
      debug: true,
      connection: {
        host : process.env.MYSQL_CLOUD_HOST,
        port : process.env.MYSQL_PORT,
        user : process.env.MYSQL_CLOUD_USER,
        password : process.env.MYSQL_CLOUD_PASS,
        //insecureAuth: true,
        database : process.env.MYSQL_DB,
        dateStrings: true
      }
    }
  };