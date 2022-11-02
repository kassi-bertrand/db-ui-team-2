
const connectToDatabase = require('../db-helper');
const Venue = require('../models/venue');
const Food = require('../models/food');
const Performer = require('../models/performer');
const User = require('../models/users');
const Form = require('../models/hostForm')
const createModelsMiddleware = async (req, res, next) => {
   console.log('Connecting to the database');
   req.models = {
      user: User,
      venue: Venue,
      food: Food,
      performer: Performer,
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