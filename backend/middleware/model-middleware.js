const Planner = require('../models/planners');
const User = require('../models/users');
const Form = require('../models/hostForm');
const createModelsMiddleware = async(req, res, next) => {
    console.log("request");
    req.models = {
        planner: Planner,
        user: User,
        form: Form
    }
    next();
}

const disconnectFromDatababaseMiddleware = (req, res, next) => {
   console.log('Disconnecting from the database');
   req.disconnect();
   next();
}

module.exports = {
   createModelsMiddleware,
   disconnectFromDatababaseMiddleware
}