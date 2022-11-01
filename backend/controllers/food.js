const Food = require('../models/food');

const fetchAllFoods = async() => {
    const result = await Food.fetchAllFoods();
    return result;
}

const fetchFoodsByUsername = async(food_user)  => {
    const result = await Food.fetchFoodsByUsername(food_user);
    return result;
}
const fetchFoodsByName = async(restaurant_name) => {
    const result = await Food.fetchFoodsByName(restaurant_name);
    return result;
}
const fetchFoodsByType = async(type) => {
    const result = await Food.fetchFoodsByType(type);
    return result;
}
const fetchFoodsByZipCode = async(zip_code) => {
    const result = await Food.fetchFoodsByZipCode(zip_code);
    return result;
}
const fetchFoodsByAvailable = async(available) => {
    const result = await Food.fetchFoodsByAvailable(available);
    return result;
}
const updateFood = async(restaurant_name, food_user) => {
    const result = await Food.updateFood(restaurant_name, food_user);
    return result;
}
const createFood = async(food_user, restaurant_name, food_type, street, city, state_initial, zip_code, guest_capacity, avg_price, available) =>{
    const result = await Food.createFood(food_user, restaurant_name, food_type, street, city, state_initial, zip_code, guest_capacity, avg_price, available);
    return result;
}
const deleteFood = async(food_user) => {
    const result = await Food.deleteFood(food_user);
    return result;
}

module.exports = {
    fetchAllFoods,
    fetchFoodsByUsername,
    fetchFoodsByName,
    fetchFoodsByType,
    fetchFoodsByZipCode,
    fetchFoodsByAvailable,
    updateFood,
    createFood,
    deleteFood
};