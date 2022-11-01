const User = require('../models/users');

const fetchAllUsers = async() => {
    const result = await User.fetchAllUsers();
    return result;
}

const createUser = async (name, phone_num, email, password) => {
    if(!email){
        console.error("No email provided");
    }
    if(!password){
        console.error("No password provided");     
    }

    const exists = await User.findUserByEmail(email);
    const exists1 = await User.findUserByUsername(name);

    if(exists.length != 0){
        console.error("Email already in use.");
    } else if(exists1.length != 0){
        console.error("Username already in use.");
    } else {
        const user = await User.createNewUser(name, phone_num, email, password);
        return user;
    }
    throw new Error("Could not create user.");
}

const authenticateUser = async(email, password) => {
    const result = await User.authenticateUser(email, password);
    return result;
}


// Finds user by email
const findUserByEmail = async(email) => {
    const result = await User.findUserByEmail(email);
    return result;
};

module.exports = {
    fetchAllUsers,
    createUser,
    authenticateUser,
    findUserByEmail
};