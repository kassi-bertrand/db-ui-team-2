// const Planner = require('../models/planners');
// const User = require('../models/users');
// const createModelsMiddleware = async(req, res, next) => {
//     req.models = {
//         planner: Planner,
//         user: User
//     }
//     next();
// }
// module.exports = { createModelsMiddleware }

const connectToDatabase = require('../models/database-helper');
const Venue = require('../models/venue');
const Food = require('../models/food');
const Performer = require('../models/performer');

const createModelsMiddleware = async (req, res, next) => {
   console.log('Connecting to the database');
   const { DBQuery, disconnect } = await connectToDatabase();
   req.models = {
      venue: new Venue(DBQuery, disconnect),
   }
   req.models = {
      food: new Food(DBQuery, disconnect),
   }
   req.models = {
      performer: new Performer(DBQuery, disconnect),
   }
   req.disconnect = disconnect;
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