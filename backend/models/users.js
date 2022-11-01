const knex = require('../database/knex');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');

const USER_TABLE = 'user';

    const fetchAllUsers = async() =>{
        const query = knex(USER_TABLE);
        const results = await query;
        return results;
    }

    const createNewUser = async(name, phone_num, email, password) => {
        console.log('Raw password:', password);
        const salt = await bcrypt.genSalt(10);
        console.log('Password salt', salt);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log('Hashed password', hashedPassword);

        const query = knex (USER_TABLE).insert({email, password: hashedPassword});
        console.log('Raw query for createNewUser:', query.toString());
        const result = await query;

        return result;
    }
    const findUserByEmail = async(email) =>{
        const query = knex(USER_TABLE).where({email});
        const result = await query;
        return result;
    }
    
    const findUserByUsername = async(name) =>{
        const query = knex(USER_TABLE).whereRaw('name LIKE "%' + name + '%"');
        const result = await query;
        return result;
    }
    
    const authenticateUser = async(email, password) => {
        const users = await findUserByEmail(email);
        console.log('Results of users query', users);
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
    
    const deleteUser = async(username) =>{
        const query = knex(USER_TABLE).where({ username }).del();
        const result = await query;
        return result;
    }
 
 module.exports = {
    fetchAllUsers,
    createNewUser,
    findUserByEmail,
    findUserByUsername,
    authenticateUser,
    deleteUser
 };