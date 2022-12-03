const User = require('../models/users');

/**
 * It fetches all users from the database and returns the result
 * @returns An array of objects
 */
const fetchAllUsers = async() => {
    const result = await User.fetchAllUsers();
    return result;
}

/**
 * This function creates a new user in the database, and returns the user's information if successful
 * @param name - String
 * @param phone_num - String
 * @param email - the email of the user
 * @param password - the password to be hashed
 * @returns The user object is being returned.
 */
const createUser = async (name, phone_num, email, password) => {
    if(!email){
        console.error("No email provided");
    }
    if(!password){
        console.error("No password provided");     
    }

    const exists = await User.findUserByEmail(email);

    if(exists.length != 0){
        console.error("Email already in use.");
    } else {
        const user = await User.createNewUser(name, phone_num, email, password);
        const return_all = await User.authenticateUser(email, password);
        return return_all;
    }
    throw new Error("Could not create user.");
}

/**
 * It takes in an email and password, and returns the result of the User.authenticateUser function
 * @param email - The email address of the user.
 * @param password - The password to be hashed.
 * @returns The result of the authenticateUser function.
 */
const authenticateUser = async(email, password) => {
    const result = await User.authenticateUser(email, password);
    return result;
}


// Finds user by email
/**
 * It takes an email address as an argument, and returns a user object if the email address exists in the database
 * @param email - The email address of the user you want to find.
 * @returns The result of the findUserByEmail function.
 */
const findUserByEmail = async(email) => {
    const result = await User.findUserByEmail(email);
    return result;
};

/* Exporting the functions so that they can be used in other files. */
module.exports = {
    fetchAllUsers,
    createUser,
    authenticateUser,
    findUserByEmail
};