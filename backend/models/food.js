class Food {
    constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }
    close () {
        this.disconnect();
    }
    async fetchAllFoods () {
        const results = await this.DBQuery('SELECT * FROM food');
        return results;
    }
    async fetchFoodsByUsername (food_user) {
        const results = await this.DBQuery('SELECT * FROM food WHERE food_user = ?', [food_user]);
        return results;
    }
    async fetchFoodsByName (restaurant_name) {
        const results = await this.DBQuery('SELECT * FROM food WHERE restaurant_name = ?', [restaurant_name]);
        return results;
    }
    async fetchFoodsByType (type) {
        const results = await this.DBQuery('SELECT * FROM food WHERE type = ?', [type]);
        return results;
    }
    async fetchFoodsByZipCode (zip_code) {
        const results = await this.DBQuery('SELECT * FROM food WHERE zip_code = ?', [zip_code]);
        return results;
    }
    async fetchFoodsByAvailable (available) {
        const results = await this.DBQuery('SELECT * FROM food WHERE available = ?', [available]);
        return results;
    }
    async updateFood(restaurant_name, food_user) {
        const results = await this.DBQuery('UPDATE food SET restaurant_name = ? WHERE food_user = ?', [restaurant_name, food_user]);
        return results;
    }
    async createFood(food_user, restaurant_name, food_type, street, city, state_initial, zip_code, guest_capacity, avg_price, available) {
        const results = await this.DBQuery('INSERT INTO food VALUES (?)', [food_user, restaurant_name, food_type, street, city, state_initial, zip_code, guest_capacity, avg_price, available]);
        return results;
    }
    async deleteFood(food_user) {
        const results = await this.DBQuery('DELETE FROM food WHERE food_user = ?', [food_user]);
        return results;
    }
 }
 module.exports = Food;