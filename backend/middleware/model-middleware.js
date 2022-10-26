const Planner = require('../models/planners');
const User = require('../models/users');
const createModelsMiddleware = async(req, res, next) => {
    req.models = {
        planner: Planner,
        user: User
    }
    next();
}
module.exports = { createModelsMiddleware }