const knex = require('../database/knex');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

const USER_TABLE = 'users';

class User {
    constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }
    close () {
        this.disconnect();
    }
    async createNewUser (username, first_name, last_name, phone_num, email, password) {
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
    async findUserByEmail (email) {
        const query = knex(USER_TABLE).where({email});
        const result = await query;
        return result;
    }
    
    async findUserByUsername (username) {
        const query = knex(USER_TABLE).whereRaw('username LIKE "%' + username + '%"');
        const result = await query;
        return result;
    }
    
    async authenticateUser (email, password) {
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
    
    async deleteUser (username){
        const query = knex(USER_TABLE).where({ username }).del();
        const result = await query;
        return result;
    }
 }
 module.exports = User;