const Food = require('../models/food');

/**
 * It fetches all the foods from the database and returns the result
 * @returns An array of objects
 */
const fetchAllFoods = async() => {
    const result = await Food.fetchAllFoods();
    return result;
}
/**
 * This function fetches all the foods that are associated with a specific service
 * @param food_num - the number of the caterer you want to fetch
 */
const fetchFoodsByServID = async(food_num)  => {
    const result = await Food.fetchFoodsByServID(food_num);
    return result;
}
/**
 * It fetches the food info by user id
 * @param user_id - the user_id of the user whose food info you want to fetch
 * @returns An array of objects
 */
const fetchInfoByUserId = async (user_id) => {
    const result = await Food.fetchInfoByUserId(user_id);
    return result;
}
/**
 * It fetches all the foods from the database that have the same restaurant name as the one passed in as an argument
 * @param restaurant_name - The name of the restaurant you want to search for.
 * @returns The result of the function is being returned.
 */
const fetchFoodsByName = async(restaurant_name) => {
    const result = await Food.fetchFoodsByName(restaurant_name);
    return result;
}
/**
 * It fetches foods by type from the database
 * @param food_type - The type of food you want to search for.
 * @returns An array of objects
 */
const fetchFoodsByType = async(food_type) => {
    const result = await Food.fetchFoodsByType(food_type);
    return result;
}
/**
 * It fetches foods by zip code
 * @param zip_code - The zip code of the food you want to search for.
 * @returns An array of objects
 */
const fetchFoodsByZipCode = async(zip_code) => {
    const result = await Food.fetchFoodsByZipCode(zip_code);
    return result;
}
/**
 * It fetches foods by available
 * @param available - true or false
 * @returns An array of objects
 */
const fetchFoodsByAvailable = async(available) => {
    const result = await Food.fetchFoodsByAvailable(available);
    return result;
}
/**
 * This function updates the restaurant name of a food item in the database
 * @param restaurant_name - The name of the restaurant that the user wants to update.
 * @param food_user - the user's id
 * @returns The result of the updateRestaurantName function.
 */
const updateRestaurantName = async(restaurant_name, food_user) => {
    const result = await Food.updateRestaurantName(restaurant_name, food_user);
    return result;
} 
/**
 * This function updates the food type of a food item in the database
 * @param food_type - the food type to be updated
 * @param food_user - the user's id
 * @returns The result of the updateFoodType function.
 */
const updateFoodType = async(food_type, food_user) => {
    const result = await Food.updateFoodType(food_type, food_user);
    return result;
}
/**
 * This function updates the food capacity of a food user
 * @param guest_capacity - The number of guests that the user is expecting.
 * @param food_user - the user id of the food user
 * @returns The result of the updateFoodCapacity function.
 */
const updateFoodCapacity = async(guest_capacity, food_user) => {
    const result = await Food.updateFoodCapacity(guest_capacity, food_user);
    return result;
}  
/**
 * This function updates the average price of a food item in the database
 * @param avg_price - the average price of the food
 * @param food_user - the user who created the food
 * @returns The result of the updateAveragePrice function.
 */
const updateAveragePrice = async(avg_price, food_user) => {
    const result = await Food.updateAveragePrice(avg_price, food_user);
    return result;
} 
/**
 * It updates the availability of a food item in the database
 * @param available - true or false
 * @param food_user - the user who posted the food
 * @returns The result of the updateFoodAvailability function.
 */
const updateFoodAvailability = async(available, food_user) => {
    const result = await Food.updateFoodAvailability(available, food_user);
    return result;
} 
/**
 * This function updates the address of a food user
 * @param street - the street address of the food bank
 * @param city - string
 * @param state_initial - 2 letter state abbreviation
 * @param zip_code - String
 * @param food_user - the user id of the food user
 * @returns The result of the updateFoodAddress function.
 */
const updateFoodAddress = async(street, city, state_initial, zip_code, food_user) => {
    const result = await Food.updateFoodAddress(street, city, state_initial, zip_code, food_user);
    return result;
}
/**
 * This function creates a new food item in the database
 * @param user_id - the id of the user who is creating the food
 * @param name - the name of the food
 * @param phone_num - String
 * @param street - the street address of the food
 * @param city - String
 * @param state_initial - 2 letter state abbreviation
 * @param availability -
 * @param zip_code - int
 * @param details - a string of the details of the food
 * @returns The result of the createFood function.
 */
const createFood = async(user_id, name, phone_num, street, city, state_initial, availability, zip_code, details) =>{
    const result = await Food.createFood(user_id, name, phone_num, street, city, state_initial, availability, zip_code, details);
    return result;
}
/**
 * It takes in a food number and a rating, and returns the result of the rateCaterer function in the Food model
 * @param food_num - the food number of the food you want to rate
 * @param rate - the rating of the caterer
 * @returns The result of the query.
 */
const rateCaterer = async(food_num, rate) =>{
    const result = await Food.rateCaterer(food_num, rate);
    return result;
}
/**
 * This function deletes a food from the database
 * @param food_user - {
 * @returns The result of the deleteFood function.
 */
const deleteFood = async(food_user) => {
    const result = await Food.deleteFood(food_user);
    return result;
}

/* Exporting the functions in the file so that they can be used in other files. */
module.exports = {
    fetchAllFoods,
    fetchFoodsByServID,
    fetchInfoByUserId,
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
    rateCaterer,
    deleteFood
};