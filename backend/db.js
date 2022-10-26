const mysql = require('mysql');
require("dotenv").config();

// mysql connection
var pool = mysql.createPool({
  host: process.env.MYSQL_CLOUD_HOST,
  user: process.env.MYSQL_CLOUD_USER,
  password: process.env.MYSQL_CLOUD_PASS,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB
});

module.exports = pool;

const DBConnection = mysql.createConnection({
  host: process.env.MYSQL_CLOUD_HOST,
  user: process.env.MYSQL_CLOUD_USER,
  password: process.env.MYSQL_CLOUD_PASS,
  insecureAuth: true,
});

DBConnection.connect((err) => {
  if (err) {
    console.error('There was a problem connecting to the DB', err);
    return;
  }
  connectionSuccessHandler();
})

const connectionSuccessHandler = () => {
  console.log('Successful connection!');
}