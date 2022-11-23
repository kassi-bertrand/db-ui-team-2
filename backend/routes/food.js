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
       const foodByUsername = await Food.fetchFoodsByServID(req.query.food_num);
       res.json(foodByUsername);
       next();
   } if (req.query.restaurant_name) {
       const foodByName = await Food.fetchFoodsByName(req.query.restaurant_name);
       res.json(foodByName);
       next();
   } if (req.query.food_type) {
       const foodByType = await Food.fetchFoodsByType(req.query.food_type);
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
router.post('/new', async (req, res, next) => {
    const createFood = await Food.createFood(req.body.user_id, req.body.name, req.body.phone_num, req.body.street, req.body.city, req.body.state_initial, req.body.availability, req.body.zip_code, req.body.details);
    const foodByUsername = await Food.fetchFoodsByServID(createFood);
    res.status(201).json(foodByUsername[0]);
    next();
 });
 router.put('/', async (req, res, next) => {
    if (req.body.restaurant_name) {
        const updateRestaurantName = await Food.updateRestaurantName(req.body.restaurant_name, req.body.food_user);
        res.json(updateRestaurantName);
        next();
    } if (req.body.food_type) {
        const updateFoodType = await Food.updateFoodType(req.body.food_type, req.body.food_user);
        res.json(updateFoodType);
        next();
    } if (req.body.guest_capacity) {
        const updateFoodCapacity = await Food.updateFoodCapacity(req.body.guest_capacity, req.body.food_user);
        res.json(updateFoodCapacity);
        next();
    } if (req.body.avg_price) {
        const updateAveragePrice = await Food.updateAveragePrice(req.body.avg_price, req.body.food_user);
        res.json(updateAveragePrice);
        next();
    } if (req.body.available) {
        const updateFoodAvailability = await Food.updateFoodAvailability(req.body.available, req.body.food_user);
        res.json(updateFoodAvailability);
        next();
    } if (req.body.street, req.body.city, req.body.state_initial, req.body.zip_code) {
        const updateFoodAddress = await Food.updateFoodAddress(req.body.street, req.body.city, req.body.state_initial, req.body.zip_code, req.body.food_user);
        res.json(updateFoodAddress);
        next();
    }
 }); 
 router.delete('/', async (req, res, next) => {
    const deleteFood = await Food.deleteFood(req.body.food_user);
    res.status(204).end();
    next();
 });

module.exports = router;