//models made by Karina Shin and Safwan Majeed
const knex = require('../database/knex');
const VENUE_TABLE = 'venue_details';

    const fetchAllVenues = async() => {
        const query = knex(VENUE_TABLE);
        const results = await query;
        return results;
    }
    const fetchVenuesByUserID = async(user_id) => {
        const query = knex(VENUE_TABLE).where({user_id});
        const results = await query;
        return results;
    }
    const fetchVenuesByServID = async(venue_num)=> {
        const query = knex(VENUE_TABLE).where({venue_num});
        const results = await query;
        return results;
    }
    const fetchStartByUsername = async(venue_user) => {
        const query = knex(VENUE_TABLE).where(venue_user);
        const results = await query;
        return results;
    }
    const fetchVenuesByName = async(venue_name) => {
        const query = knex(VENUE_TABLE).where(venue_name);
        const results = await query;
        return results;
    }
    const fetchVenuesByZipCode = async(zip_code) => {
        const query = knex(VENUE_TABLE).where(zip_code);
        const results = await query;
        return results;
    }
    const fetchVenuesByOccasion = async(occasion) => {
        const query = knex(VENUE_TABLE).where(occasion);
        const results = await query;
        return results;
    }
    const fetchVenuesByAvailable = async(available) => {
        const query = knex(VENUE_TABLE).where(available);
        const results = await query;
        return results;
    }
    const updateVenueName = async(venue_name, venue_user) => {
        const query = knex(VENUE_TABLE).update({venue_name}).where({venue_user});
        const results = await query;
        return results;
    }
    const updateVenueCost = async(cost, venue_user) => {
        const query = knex(VENUE_TABLE).update({cost}).where({venue_user});
        const results = await query;
        return results;
    }
    const updateOccassion = async(occasion, venue_user) => {
        const query = knex(VENUE_TABLE).update({occasion}).where({venue_user});
        const results = await query;
        return results;
    }
    const updateVenueDetails = async(details, venue_user) => {
        const query = knex(VENUE_TABLE).update({details}).where({venue_user});
        const results = await query;
        return results;
    }
    const updateVenueCapacity = async(guest_capacity, venue_user) => {
        const query = knex(VENUE_TABLE).update({guest_capacity}).where({venue_user});
        const results = await query;
        return results;
    }
    const updateVenueAvailability = async(available, venue_user) => {
        const query = knex(VENUE_TABLE).update({available}).where({venue_user});
        const results = await query;
        return results;
    }
    const updateVenueAddress = async(occasion, venue_user) => {
        const query = knex(VENUE_TABLE).update({occasion}).where({venue_user});
        const results = await query;
        return results;
    }
    const createVenue = async(user_id, name, phone_num, street, city, state_initial, availability, zip_code, cost, guest_capacity, details) => {
        const query = knex(VENUE_TABLE).insert({user_id, name, phone_num, street, city, state_initial, availability,zip_code, cost, guest_capacity, details});
        const results = await query;
        return results;
    }
    const rateVenue = async(venue_num, rate) =>{
        if (rate < 6 && rate > -1){
            const ratingCount = knex(VENUE_TABLE).where({ venue_num }).select("rating_count");
            var rating_count = await ratingCount;
            const ratingSum = knex(VENUE_TABLE).where({ venue_num }).select("rating_sum");
            var rating_sum = await ratingSum;
            const ratingAvg = knex(VENUE_TABLE).where({ venue_num }).select("rating");
            var rating = await ratingAvg;
            rating_count = JSON.stringify(rating_count);
            rating_count = rating_count.replace('[{"rating_count":', "");
            rating_count = rating_count.replace('}]', "");
            rating_count = Number(rating_count);
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
            const query = knex(VENUE_TABLE).update({rating, rating_count, rating_sum}).where({venue_num});
            const results = await query;
            return results;
        }
    }
    const deleteVenue = async(venue_user) => {
        const query = knex(VENUE_TABLE).delete().where({venue_user});
        const results = await query;
        return results;
    }
 
 module.exports = {
    fetchAllVenues,
    fetchVenuesByServID,
    fetchVenuesByName,
    fetchVenuesByUserID,
    fetchVenuesByZipCode,
    fetchVenuesByOccasion,
    fetchVenuesByAvailable,
    updateVenueName,
    updateVenueCost,
    updateOccassion,
    updateVenueDetails,
    updateVenueCapacity,
    updateVenueAvailability,
    updateVenueAddress,
    createVenue,
    rateVenue,
    deleteVenue
 };