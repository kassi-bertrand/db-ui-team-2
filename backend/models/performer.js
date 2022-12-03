//models made by Karina Shin and Safwan Majeed
const knex = require('../database/knex');

const PERFORMER_TABLE = 'performer_details';

    /**
     * It returns a promise that resolves to an array of objects, each object representing a performer
     * @returns An array of objects.
     */
    const fetchAllPerformers = async() => {
        const query = knex(PERFORMER_TABLE);
        const results = await query;
        return results;
    }
    //this function rates a service
    /**
     * This function takes in a performer number and a rating and updates the performer's rating, rating count, and rating
     * sum
     * @param performer_num - the performer's unique id
     * @param rate - the rating you want to give the performer
     * @returns The rating, rating_count, and rating_sum are being returned.
     */
    const ratePerformer = async(performer_num, rate) =>{
            //between 0 - 5 rating
        if (rate < 6 && rate > -1){
                //selecting rating info
            const ratingCount = knex(PERFORMER_TABLE).where({ performer_num }).select("rating_count");
            var rating_count = await ratingCount;
            const ratingSum = knex(PERFORMER_TABLE).where({ performer_num }).select("rating_sum");
            var rating_sum = await ratingSum;
            const ratingAvg = knex(PERFORMER_TABLE).where({ performer_num }).select("rating");
            var rating = await ratingAvg;
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
            rating_sum = JSON.stringify(rating_sum);
            rating_sum = rating_sum.replace('[{"rating_sum":', "");
            rating_sum = rating_sum.replace('}]', "");
            rating_sum = Number(rating_sum);
            if(rating_sum > -1){
                rating_sum = rating_sum + rate;
            }
            else{
                rating_sum = rate;
            }
            rating = JSON.stringify(rating);
            rating = rating.replace('[{"rating":', "");
            rating = rating.replace('}]', "");
            rating = Number(rating);
            rating = rating_sum/rating_count;
            const query = knex(PERFORMER_TABLE).update({rating, rating_count, rating_sum}).where({performer_num});
            const results = await query;
            return results;
        }
    }
    /**
     * It fetches a performer by their performer_num.
     * @param performer_num - the performer's number
     * @returns The performer_num, performer_name, performer_desc, performer_img, and performer_vid.
     */
    const fetchPerformerByServID = async(performer_num)=> {
        const query = knex(PERFORMER_TABLE).where({performer_num});
        const results = await query;
        return results;
    }
    /**
     * It returns a list of performers associated with a user
     * @param user_id - the user_id of the performer you want to fetch
     * @returns An array of objects.
     */
    const fetchPerformersByUserID = async(user_id) => {
        const query = knex(PERFORMER_TABLE).where({user_id});
        const results = await query;
        return results;
    }
    /**
     * It returns a list of performers who are available
     * @param available - boolean
     * @returns An array of objects.
     */
    const fetchPerformersByAvailable = async(available) => {
        const query = knex(PERFORMER_TABLE).where({available});
        const results = await query;
        return results;
    }
    /**
     * This function updates the performer_name in the performer table where the p_user is equal to the p_user passed in
     * @param performer_name - the new name of the performer
     * @param p_user - the performer's user id
     * @returns The results of the query.
     */
    const updatePerformerName = async(performer_name, p_user) => {
        const query = knex(PERFORMER_TABLE).update({performer_name}).where({p_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the details of a performer in the database
     * @param details - the details of the performer
     * @param p_user - the performer's username
     * @returns The number of rows affected by the update.
     */
    const updatePerformerDetails = async(details, p_user) => {
        const query = knex(PERFORMER_TABLE).update({details}).where({p_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the number of performers in the database
     * @param num_performers - the number of performers in the group
     * @param p_user - the performer's username
     * @returns The number of performers in the database.
     */
    const updateNumPerformers = async(num_performers, p_user) => {
        const query = knex(PERFORMER_TABLE).update({num_performers}).where({p_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the availability of a performer in the database
     * @param available - true or false
     * @param p_user - the performer's username
     * @returns The results of the query.
     */
    const updatePerformerAvailability = async(available, p_user) => {
        const query = knex(PERFORMER_TABLE).update({available}).where({p_user});
        const results = await query;
        return results;
    }
    /**
     * This function creates a new performer in the database
     * @param user_id - the id of the user who is creating the performer
     * @param name - string
     * @param phone_num - string
     * @param zip_code - string
     * @param availability - a string of numbers separated by commas.
     * @param details - a string of the performer's details
     * @returns The results of the query.
     */
    const createPerformer = async(user_id, name, phone_num, zip_code, availability, details) => {
        const query = knex(PERFORMER_TABLE).insert({user_id, name, phone_num, zip_code, availability, details});
        const results = await query;
        return results;
    }
    /**
     * This function deletes a performer from the database
     * @param p_user - the user id of the performer
     * @returns The number of rows deleted.
     */
    const deletePerformer = async(p_user) => {
        const query = knex(PERFORMER_TABLE).delete().where({p_user});
        const results = await query;
        return results;
    }
    /**
     * It takes a string, and adds it to the end of a comma separated list of strings
     * @param Booked - the date that the user wants to book
     * @param p_user - the user who is booking the food
     * @returns The results of the query.
     */
    const updateDateBooked = async(Booked, p_user) => {
        const query = knex(FOOD_TABLE).where({food_user}).update({ Booked: knex.raw('CONCAT(Booked, ?)',[','+Booked]) });
        const results = await query;
        return results;
    }
 
 /* Exporting the functions in the file. */
 module.exports  = {
    updateDateBooked,
    fetchAllPerformers,
    fetchPerformerByServID,
    ratePerformer,
    fetchPerformersByUserID,
    fetchPerformersByAvailable,
    updatePerformerName,
    updatePerformerDetails,
    updateNumPerformers,
    updatePerformerAvailability,
    createPerformer,
    deletePerformer
 }