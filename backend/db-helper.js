const mysql = require('mysql');
const util = require('util');

/**
 * It connects to the database, and returns a function that lets us run queries, and another to disconnect from the DB at
 * the end of a route
 * @returns A function that lets us run queries, and another to disconnect from the DB at the end of a route
 */
const connectToDatabase = async () => {
    try {
        const DBConnection = mysql.createConnection({
            host: process.env.MYSQL_CLOUD_HOST,
            user: process.env.MYSQL_CLOUD_USER,
            password: process.env.MYSQL_CLOUD_PASS,
            insecureAuth: true,
            database: process.env.MYSQL_DB
        });
        // Create the connection
        const DBCreateConnection = util.promisify(DBConnection.connect).bind(DBConnection);
        await DBCreateConnection();
        // We return two things: a function that lets us run queries, and another to
        // disconnect from the DB at the end of a route
        const DBQuery = util.promisify(DBConnection.query).bind(DBConnection);
        const disconnect = () => DBConnection.end();
        return { DBQuery, disconnect };
    } catch (err) {
        console.error('There was an error with the DB', err);
        throw err;
    }
 };
 /* Exporting the function `connectToDatabase` so that it can be used in other files. */
 module.exports = connectToDatabase;