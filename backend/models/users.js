//models created by Kate Bouis
const knex = require('../database/knex');
/* Importing bcryptjs insteas bcrypt to avoid the docker issue*/
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');

const USER_TABLE = 'user';

    /**
     * It fetches all the users from the database.
     * @returns An array of objects
     */
    const fetchAllUsers = async() =>{
        const query = knex(USER_TABLE);
        const results = await query;
        return results;
    }

    /**
     * It takes in a name, phone number, email, and password, and then creates a new user in the database with the given
     * information
     * @param name - the name of the user
     * @param phone_num - the phone number of the user
     * @param email - the email of the user
     * @param password - the password that the user entered
     * @returns The result of the query.
     */
    const createNewUser = async(name, phone_num, email, password) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const query = knex (USER_TABLE).insert({name, phone_num, email, password: hashedPassword});
        const result = await query;

        return result;
    }
    /**
     * It takes an email as an argument, and returns the user object that matches that email
     * @param email - The email of the user you want to find.
     * @returns An array of objects
     */
    const findUserByEmail = async(email) =>{
        const query = knex(USER_TABLE).where({email});
        const result = await query;
        return result;
    }
    
    /**
     * It takes a string as an argument, and returns an array of objects that match the string
     * @param name - the name of the user you want to find
     * @returns An array of objects
     */
    const findUserByUsername = async(name) =>{
        const query = knex(USER_TABLE).whereRaw('name LIKE "%' + name + '%"');
        const result = await query;
        return result;
    }
    
    /**
     * It takes an email and password, finds the user with that email, checks if the password is correct, and returns the
     * user if it is
     * @param email - The email address of the user to authenticate.
     * @param password - The password the user entered
     * @returns The user's email and password.
     */
    const authenticateUser = async(email, password) => {
        const users = await findUserByEmail(email);
        if (users.length === 0) {
            console.error(`No users matched the email: ${email}`);
            knex.closeknex();
            return null;
        }
        const user = users [0];
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            delete user.password;
            return user;
        }
        return null;
    }
    
    /**
     * It deletes a user from the database.
     * @param username - The username of the user you want to delete.
     * @returns The result of the query.
     */
    const deleteUser = async(username) =>{
        const query = knex(USER_TABLE).where({ username }).del();
        const result = await query;
        return result;
    }
 
 /* Exporting the functions from the user model. */
 module.exports = {
    fetchAllUsers,
    createNewUser,
    findUserByEmail,
    findUserByUsername,
    authenticateUser,
    deleteUser
 };