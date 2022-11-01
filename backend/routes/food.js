const express = require('express');
/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to foods
*/
const Food = require('../controllers/food');

const router = express.Router();
// Note: we don't specify `/foods`, just `/`. The association to `/foods` happens
// in the root index.js file
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', async (req, res, next) => {
   if (req.query.food_user) {
       const foodByUsername = await Food.fetchFoodsByUsername(req.query.food_user);
       res.json(foodByUsername);
       next();
   } if (req.query.restaurant_name) {
       const foodByName = await Food.fetchFoodsByName(req.query.restaurant_name);
       res.json(foodByName);
       next();
   } if (req.query.type) {
       const foodByType = await Food.fetchFoodsByType(req.query.type);
       res.json(foodByType);
       next();
   } if (req.query.zip_code) {
       const foodByZipCode = await Food.fetchFoodsByZipCode(req.query.zip_code);
       res.json(foodByZipCode);
       next();
   } if (req.query.available) {
       const foodByAvailable = await Food.fetchFoodsByAvailable(req.query.available);
       res.json(foodByAvailable);
       next();
   } else {
       const allFoods = await Food.fetchAllFoods();
       res.json(allFoods);
       next();
   }
});
router.post('/', async (req, res, next) => {
    const createFood = await Food.createFood(req.body.food_user, req.body.restaurant_name, req.body.food_type, req.body.street, req.body.city, req.body.state_initial, req.body.zip_code, req.body.guest_capacity, req.body.avg_price, req.body.available);
    res.status(201).json(createFood);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updateFood = await Food.updateFood(req.body.restaurant_name, req.body.food_user);
    res.json(updateFood);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deleteFood = await Food.deleteFood(req.body.food_user);
    res.status(204).end();
    next();
 });

module.exports = router;