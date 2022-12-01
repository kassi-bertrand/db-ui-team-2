//models made by Karina Shin and Safwan Majeed
const knex = require('../database/knex');

const PERFORMER_TABLE = 'performer_details';

    const fetchAllPerformers = async() => {
        const query = knex(PERFORMER_TABLE);
        const results = await query;
        return results;
    }
    //this function rates a service
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
    const fetchPerformerByServID = async(performer_num)=> {
        const query = knex(PERFORMER_TABLE).where({performer_num});
        const results = await query;
        return results;
    }
    const fetchPerformersByUserID = async(user_id) => {
        const query = knex(PERFORMER_TABLE).where({user_id});
        const results = await query;
        return results;
    }
    const fetchPerformersByAvailable = async(available) => {
        const query = knex(PERFORMER_TABLE).where({available});
        const results = await query;
        return results;
    }
    const updatePerformerName = async(performer_name, p_user) => {
        const query = knex(PERFORMER_TABLE).update({performer_name}).where({p_user});
        const results = await query;
        return results;
    }
    const updatePerformerDetails = async(details, p_user) => {
        const query = knex(PERFORMER_TABLE).update({details}).where({p_user});
        const results = await query;
        return results;
    }
    const updateNumPerformers = async(num_performers, p_user) => {
        const query = knex(PERFORMER_TABLE).update({num_performers}).where({p_user});
        const results = await query;
        return results;
    }
    const updatePerformerAvailability = async(available, p_user) => {
        const query = knex(PERFORMER_TABLE).update({available}).where({p_user});
        const results = await query;
        return results;
    }
    const createPerformer = async(user_id, name, phone_num, zip_code, availability, details) => {
        const query = knex(PERFORMER_TABLE).insert({user_id, name, phone_num, zip_code, availability, details});
        const results = await query;
        return results;
    }
    const deletePerformer = async(p_user) => {
        const query = knex(PERFORMER_TABLE).delete().where({p_user});
        const results = await query;
        return results;
    }
    const updateDateBooked = async(Booked, p_user) => {
        const query = knex(FOOD_TABLE).where({food_user}).update({ Booked: knex.raw('CONCAT(Booked, ?)',[','+Booked]) });
        const results = await query;
        return results;
    }
 
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