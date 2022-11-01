const knex = require('../database/knex');

const FOOD_TABLE = 'food_details';

class Food {
    constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }
    close () {
        this.disconnect();
    }
    async fetchAllFoods () {
        const query = knex(FOOD_TABLE);
        const results = await query;
        return results;
    }
    async fetchFoodsByUsername (food_user) {
        const query = knex(FOOD_TABLE).where({food_user});
        const results = await query;
        return results;
    }
    async fetchFoodsByName (restaurant_name) {
        const query = knex(FOOD_TABLE).where({restaurant_name});
        const results = await query;
        return results;
    }
    async fetchFoodsByType (food_type) {
        const query = knex(FOOD_TABLE).where({food_type});
        const results = await query;
        return results;
    }
    async fetchFoodsByZipCode (zip_code) {
        const query = knex(FOOD_TABLE).where({zip_code});
        const results = await query;
        return results;
    }
    async fetchFoodsByAvailable (available) {
        const query = knex(FOOD_TABLE).where({available});
        const results = await query;
        return results;
    }
    async updateRestaurantName(restaurant_name, food_user) {
        const query = knex(FOOD_TABLE).update({restaurant_name}).where({food_user});
        const results = await query;
        return results;
    }
    async updateFoodType(food_type, food_user) {
        const query = knex(FOOD_TABLE).update({food_type}).where({food_user});
        const results = await query;
        return results;
    }
    async updateFoodCapacity(guest_capacity, food_user) {
        const query = knex(FOOD_TABLE).update({guest_capacity}).where({food_user});
        const results = await query;
        return results;
    } 
    async updateAveragePrice(avg_price, food_user) {
        const query = knex(FOOD_TABLE).update({avg_price}).where({food_user});
        const results = await query;
        return results;
    }
    async updateFoodAvailability(available, food_user) {
        const query = knex(FOOD_TABLE).update({available}).where({food_user});
        const results = await query;
        return results;
    }
    async updateFoodAddress(street, city, state_initial, zip_code, food_user) {
        const query = knex(FOOD_TABLE).update({street, city, state_initial, zip_code}).where({food_user});
        const results = await query;
        return results;
    }
    async createFood(food_user, restaurant_name, food_type, street, city, state_initial, zip_code, guest_capacity, avg_price, available) {
        const query = knex(FOOD_TABLE).insert({food_user, restaurant_name, food_type, street, city, state_initial, zip_code, guest_capacity, avg_price, available});
        const results = await query;
        return results;
    }
    async deleteFood(food_user) {
        const query = knex(FOOD_TABLE).delete().where({food_user});
        const results = await query;
        return results;
    }
 }
 module.exports = Food;