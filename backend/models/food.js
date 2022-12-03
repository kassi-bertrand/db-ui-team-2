//models made by Karina Shin and Safwan Majeed
const knex = require('../database/knex');

const FOOD_TABLE = 'food_details';

    /**
     * It returns a promise that resolves to an array of all the foods in the database
     * @returns An array of objects
     */
    const fetchAllFoods = async() =>{
        const query = knex(FOOD_TABLE);
        const results = await query;
        return results;
    }
    /**
     * This function takes in a food_num and returns the food_name, food_num, and food_price of the food with the matching
     * food_num
     * @param food_num - the food number
     */
    const fetchFoodsByServID = async(food_num)=> {
        const query = knex(FOOD_TABLE).where({food_num});
        const results = await query;
        return results;
    }
    /**
     * It takes a user_id as an argument, and returns an array of objects that contain the food information for that user
     * @param user_id - the user_id of the user you want to get the food info for
     * @returns An array of objects
     */
    const fetchInfoByUserId = async (user_id) => {
        const query = knex(FOOD_TABLE).where({ user_id })
        const results = await query;
        return results;
    }
    /**
     * It fetches all the foods from the database that are from a specific restaurant.
     * @param restaurant_name - the name of the restaurant
     */
    const fetchFoodsByName= async(restaurant_name)=>  {
        const query = knex(FOOD_TABLE).where({restaurant_name});
        const results = await query;
        return results;
    }
    /**
     * It takes a food type as an argument, and returns a list of foods that match that food type
     * @param food_type - the type of food you want to search for
     * @returns An array of objects
     */
    const fetchFoodsByType = async(food_type)=> {
        const query = knex(FOOD_TABLE).where({food_type});
        const results = await query;
        return results;
    }
    /**
     * It fetches all the foods in the database that have the same zip code as the one passed in.
     * @param zip_code - The zip code of the food pantry
     * @returns An array of objects
     */
    const fetchFoodsByZipCode = async(zip_code) =>{
        const query = knex(FOOD_TABLE).where({zip_code});
        const results = await query;
        return results;
    }
    /**
     * It returns a promise that resolves to an array of food objects
     * @param available - true or false
     * @returns An array of objects
     */
    const fetchFoodsByAvailable = async(available)=> {
        const query = knex(FOOD_TABLE).where({available});
        const results = await query;
        return results;
    }
    /**
     * This function updates the restaurant name of a food item in the database
     * @param restaurant_name - the name of the restaurant
     * @param food_user - the user's id
     * @returns The results of the query.
     */
    const updateRestaurantName = async(restaurant_name, food_user)=> {
        const query = knex(FOOD_TABLE).update({restaurant_name}).where({food_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the food_type column in the food table where the food_user column is equal to the food_user
     * parameter
     * @param food_type - the type of food you want to update
     * @param food_user - the user's id
     * @returns The results of the query.
     */
    const updateFoodType= async(food_type, food_user)=> {
        const query = knex(FOOD_TABLE).update({food_type}).where({food_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the guest_capacity of a food_user in the food table
     * @param guest_capacity - the new guest capacity
     * @param food_user - the user id of the food user
     * @returns The results of the query.
     */
    const updateFoodCapacity = async(guest_capacity, food_user)=> {
        const query = knex(FOOD_TABLE).update({guest_capacity}).where({food_user});
        const results = await query;
        return results;
    } 
    /**
     * It updates the average price of a food item.
     * @param avg_price - the average price of the food item
     * @param food_user - the user's id
     * @returns The results of the query.
     */
    const updateAveragePrice = async(avg_price, food_user) => {
        const query = knex(FOOD_TABLE).update({avg_price}).where({food_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the availability of a food item in the database
     * @param available - true or false
     * @param food_user - the id of the food item
     * @returns The results of the query.
     */
    const updateFoodAvailability= async(available, food_user) =>{
        const query = knex(FOOD_TABLE).update({available}).where({food_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the address of a food user in the database
     * @param street - the street address of the food user
     * @param city - string
     * @param state_initial - The two letter abbreviation for the state.
     * @param zip_code - the zip code of the food user
     * @param food_user - the user id of the food user
     * @returns The results of the query.
     */
    const updateFoodAddress= async(street, city, state_initial, zip_code, food_user) =>{
        const query = knex(FOOD_TABLE).update({street, city, state_initial, zip_code}).where({food_user});
        const results = await query;
        return results;
    }
    /**
     * This function creates a new food entry in the database
     * @param user_id - the id of the user who is creating the food
     * @param name - name of the food
     * @param phone_num - string
     * @param street - the street address of the food
     * @param city - string
     * @param state_initial - 2 letter state abbreviation
     * @param availability -
     * @param zip_code - int
     * @param details - string
     * @returns The results of the query.
     */
    const createFood= async(user_id, name, phone_num, street, city, state_initial, availability, zip_code, details) =>{
        const query = knex(FOOD_TABLE).insert({user_id, name, phone_num, street, city, state_initial, availability, zip_code, details});
        const results = await query;
        return results;
    }
     //This function allows a user to rate a service.
    /**
     * This function takes in a food number and a rating and updates the rating of the food in the database
     * @param food_num - the food number of the food item
     * @param rate - the rating that the user gives to the food
     * @returns The rating, rating_count, and rating_sum are being returned.
     */
    const rateCaterer = async(food_num, rate) =>{
        //between 0 - 5 rating
        if (rate < 6 && rate > -1){
            //selecting rating info
            const ratingCount = knex(FOOD_TABLE).where({ food_num }).select("rating_count");
            var rating_count = await ratingCount;
            const ratingSum = knex(FOOD_TABLE).where({ food_num }).select("rating_sum");
            var rating_sum = await ratingSum;
            const ratingAvg = knex(FOOD_TABLE).where({ food_num }).select("rating");
            var rating = await ratingAvg;
            //stringify returns and remove extra text
            rating_count = JSON.stringify(rating_count);
            rating_count = rating_count.replace('[{"rating_count":', "");
            rating_count = rating_count.replace('}]', "");
            rating_count = Number(rating_count);
            //rating count
            if(rating_count > -1){
                rating_count = rating_count+1;
            }
            else{
                rating_count = 1;
            }
            //stringify returns and remove extra text
            rating_sum = JSON.stringify(rating_sum);
            rating_sum = rating_sum.replace('[{"rating_sum":', "");
            rating_sum = rating_sum.replace('}]', "");
            rating_sum = Number(rating_sum);
            //summing if not null
            if(rating_sum > -1){
            rating_sum = rating_sum + rate;
            }
            else{
                rating_sum = rate;
            }
            ///stringify returns and remove extra text
            rating = JSON.stringify(rating);
            rating = rating.replace('[{"rating":', "");
            rating = rating.replace('}]', "");
            rating = Number(rating);
            //getting final rating
            rating = rating_sum/rating_count;
            //put to table
            const query = knex(FOOD_TABLE).update({rating, rating_count, rating_sum}).where({food_num});
            const results = await query;
            return results;
        }
    }
    /**
     * This function deletes a food item from the database
     * @param food_user - The user's id
     * @returns The results of the query.
     */
    const deleteFood= async(food_user) =>{
        const query = knex(FOOD_TABLE).delete().where({food_user});
        const results = await query;
        return results;
    }
 /* Exporting the functions in the file. */
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