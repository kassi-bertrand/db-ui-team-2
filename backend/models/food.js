const knex = require('../database/knex');

const FOOD_TABLE = 'food_details';

//class Food {
    /*constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }
    close () {
        this.disconnect();
    }*/
    const fetchAllFoods = async() =>{
        const query = knex(FOOD_TABLE);
        const results = await query;
        return results;
    }
    const fetchFoodsByUsername = async(food_user)=> {
        const query = knex(FOOD_TABLE).where({food_user});
        const results = await query;
        return results;
    }
    const fetchFoodsByName= async(restaurant_name)=>  {
        const query = knex(FOOD_TABLE).where({restaurant_name});
        const results = await query;
        return results;
    }
    const fetchFoodsByType = async(food_type)=> {
        const query = knex(FOOD_TABLE).where({food_type});
        const results = await query;
        return results;
    }
    const fetchFoodsByZipCode = async(zip_code) =>{
        const query = knex(FOOD_TABLE).where({zip_code});
        const results = await query;
        return results;
    }
    const fetchFoodsByAvailable = async(available)=> {
        const query = knex(FOOD_TABLE).where({available});
        const results = await query;
        return results;
    }
    const updateRestaurantName = async(restaurant_name, food_user)=> {
        const query = knex(FOOD_TABLE).update({restaurant_name}).where({food_user});
        const results = await query;
        return results;
    }
    const updateFoodType= async(food_type, food_user)=> {
        const query = knex(FOOD_TABLE).update({food_type}).where({food_user});
        const results = await query;
        return results;
    }
    const updateFoodCapacity = async(guest_capacity, food_user)=> {
        const query = knex(FOOD_TABLE).update({guest_capacity}).where({food_user});
        const results = await query;
        return results;
    } 
    const updateAveragePrice = async(avg_price, food_user) => {
        const query = knex(FOOD_TABLE).update({avg_price}).where({food_user});
        const results = await query;
        return results;
    }
    const updateFoodAvailability= async(available, food_user) =>{
        const query = knex(FOOD_TABLE).update({available}).where({food_user});
        const results = await query;
        return results;
    }
    const updateFoodAddress= async(street, city, state_initial, zip_code, food_user) =>{
        const query = knex(FOOD_TABLE).update({street, city, state_initial, zip_code}).where({food_user});
        const results = await query;
        return results;
    }
    const createFood= async(food_user, restaurant_name, food_type, street, city, state_initial, zip_code, guest_capacity, avg_price, available) =>{
        const query = knex(FOOD_TABLE).insert({food_user, restaurant_name, food_type, street, city, state_initial, zip_code, guest_capacity, avg_price, available});
        const results = await query;
        return results;
    }
    const deleteFood= async(food_user) =>{
        const query = knex(FOOD_TABLE).delete().where({food_user});
        const results = await query;
        return results;
    }
 //}
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
 //module.exports = Food;