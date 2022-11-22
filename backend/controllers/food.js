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
const fetchFoodsByType = async(food_type) => {
    const result = await Food.fetchFoodsByType(food_type);
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
const updateRestaurantName = async(restaurant_name, food_user) => {
    const result = await Food.updateRestaurantName(restaurant_name, food_user);
    return result;
} 
const updateFoodType = async(food_type, food_user) => {
    const result = await Food.updateFoodType(food_type, food_user);
    return result;
}
const updateFoodCapacity = async(guest_capacity, food_user) => {
    const result = await Food.updateFoodCapacity(guest_capacity, food_user);
    return result;
}  
const updateAveragePrice = async(avg_price, food_user) => {
    const result = await Food.updateAveragePrice(avg_price, food_user);
    return result;
} 
const updateFoodAvailability = async(available, food_user) => {
    const result = await Food.updateFoodAvailability(available, food_user);
    return result;
} 
const updateFoodAddress = async(street, city, state_initial, zip_code, food_user) => {
    const result = await Food.updateFoodAddress(street, city, state_initial, zip_code, food_user);
    return result;
}
const createFood = async(user_id, name, phone_num, street, city, state_initial, zip_code, details) =>{
    const result = await Food.createFood(user_id, name, phone_num, street, city, state_initial, zip_code, details);
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
    updateRestaurantName,
    updateFoodType,
    updateFoodCapacity,
    updateAveragePrice,
    updateFoodAvailability,
    updateFoodAddress,
    createFood,
    deleteFood
};