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
    const fetchFoodsByServID = async(food_num)=> {
        const query = knex(FOOD_TABLE).where({food_num});
        const results = await query;
        return results;
    }
    const fetchInfoByUserId = async (user_id) => {
        //console.log("we reached here!")
           const query = knex(FOOD_TABLE).where({ user_id })
           console.log("knex? here!")
          // console.log(query);
           const results = await query;
           //console.log("results");
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
    const createFood= async(user_id, name, phone_num, street, city, state_initial, availability, zip_code, details) =>{
        const query = knex(FOOD_TABLE).insert({user_id, name, phone_num, street, city, state_initial, availability, zip_code, details});
        const results = await query;
        return results;
    }
    const rateCaterer = async(food_num, rate) =>{
        if (rate < 6 && rate > -1)
        {
        const ratingCount = knex(FOOD_TABLE).where({ food_num }).select("rating_count");
        var rating_count = await ratingCount;
        const ratingSum = knex(FOOD_TABLE).where({ food_num }).select("rating_sum");
        var rating_sum = await ratingSum;
        const ratingAvg = knex(FOOD_TABLE).where({ food_num }).select("rating");
        var rating = await ratingAvg;
        rating_count = JSON.stringify(rating_count);
        rating_count = rating_count.replace('[{"rating_count":', "");
        rating_count = rating_count.replace('}]', "");
        rating_count = Number(rating_count);
        console.log(rating_count)
        if(rating_count > -1){
            console.log("is it here?")
        rating_count = rating_count+1;
        }
        else{
            rating_count = 1;
        }
        console.log(rating_count)
        rating_sum = JSON.stringify(rating_sum);
        rating_sum = rating_sum.replace('[{"rating_sum":', "");
        rating_sum = rating_sum.replace('}]', "");
        rating_sum = Number(rating_sum);
        console.log(rating_sum)
        if(rating_sum > -1){
            console.log("is it here?")
        rating_sum = rating_sum + rate;
        }
        else{
            rating_sum = rate;
        }
        console.log(rating_sum);
        rating = JSON.stringify(rating);
        rating = rating.replace('[{"rating":', "");
        rating = rating.replace('}]', "");
        rating = Number(rating);
        console.log(rating);
        rating = rating_sum/rating_count;
        console.log(rating);
        const query = knex(FOOD_TABLE).update({rating, rating_count, rating_sum}).where({food_num});
        const results = await query;
        return results;
    }
    }
    const deleteFood= async(food_user) =>{
        const query = knex(FOOD_TABLE).delete().where({food_user});
        const results = await query;
        return results;
    }
 //}
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
 //module.exports = Food;