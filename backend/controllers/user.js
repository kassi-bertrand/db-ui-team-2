const User = require('../models/users');
const Planner = require('../models/planners');

const accessTokenSecret = 'mysupercoolsecret';

const authenticatePlanner = async(email, password) => {
    const user = await User.authenticateUser(email, password);
    if (user === null) {
        return user;
    }
    const planners = await Planner.findUserByEmail(email);
    console.log('Planner', planners);
    const accessToken = jwt.sign({...students[0], claims: ['planner']}, accessTokenSecret);

    return accessToken;
}

module.exports = {
    authenticatePlanner
};