//models made by Karina Shin and Safwan Majeed
const knex = require('../database/knex');
const VENUE_TABLE = 'venue_details';

    /**
     * It returns a promise that resolves to an array of objects, each object representing a venue
     * @returns An array of objects.
     */
    const fetchAllVenues = async() => {
        const query = knex(VENUE_TABLE);
        const results = await query;
        return results;
    }
    /**
     * It returns a promise that resolves to an array of venues that belong to a user
     * @param user_id - the user_id of the user you want to get the venues for
     * @returns An array of objects.
     */
    const fetchVenuesByUserID = async(user_id) => {
        const query = knex(VENUE_TABLE).where({user_id});
        const results = await query;
        return results;
    }
    /**
     * It takes a venue_num as an argument and returns a promise that resolves to an array of objects
     * @param venue_num - the venue number of the venue you want to fetch
     * @returns The venue_num is being returned.
     */
    const fetchVenuesByServID = async(venue_num)=> {
        const query = knex(VENUE_TABLE).where({venue_num});
        const results = await query;
        return results;
    }
    /**
     * It takes a venue_user object as an argument, and returns the results of a query to the database
     * @param venue_user - {
     * @returns The results of the query.
     */
    const fetchStartByUsername = async(venue_user) => {
        const query = knex(VENUE_TABLE).where(venue_user);
        const results = await query;
        return results;
    }
    /**
     * It takes a venue name as an argument, and returns a list of venues that match that name
     * @param venue_name - The name of the venue you want to search for.
     * @returns An array of objects
     */
    const fetchVenuesByName = async(venue_name) => {
        const query = knex(VENUE_TABLE).where(venue_name);
        const results = await query;
        return results;
    }
    /**
     * It takes a zip code as an argument, and returns a list of venues in that zip code
     * @param zip_code - The zip code of the venue
     * @returns An array of objects
     */
    const fetchVenuesByZipCode = async(zip_code) => {
        const query = knex(VENUE_TABLE).where(zip_code);
        const results = await query;
        return results;
    }
    /**
     * It takes an occasion as an argument and returns a list of venues that are suitable for that occasion
     * @param occasion - This is the occasion that the user is looking for.
     * @returns An array of objects.
     */
    const fetchVenuesByOccasion = async(occasion) => {
        const query = knex(VENUE_TABLE).where(occasion);
        const results = await query;
        return results;
    }
    /**
     * It takes a boolean value and returns a list of venues that are available or unavailable
     * @param available - true/false
     * @returns An array of objects
     */
    const fetchVenuesByAvailable = async(available) => {
        const query = knex(VENUE_TABLE).where(available);
        const results = await query;
        return results;
    }
    /**
     * This function updates the venue name in the database
     * @param venue_name - The new name of the venue
     * @param venue_user - the user id of the venue
     * @returns The results of the query.
     */
    const updateVenueName = async(venue_name, venue_user) => {
        const query = knex(VENUE_TABLE).update({venue_name}).where({venue_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the cost of a venue in the database
     * @param cost - the cost of the venue
     * @param venue_user - the user id of the venue
     * @returns The results of the query.
     */
    const updateVenueCost = async(cost, venue_user) => {
        const query = knex(VENUE_TABLE).update({cost}).where({venue_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the occasion column in the venue table with the occasion passed in as a parameter
     * @param occasion - the occasion you want to update to
     * @param venue_user - the user id of the venue
     * @returns The results of the query.
     */
    const updateOccassion = async(occasion, venue_user) => {
        const query = knex(VENUE_TABLE).update({occasion}).where({venue_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the details of a venue in the database
     * @param details - the details of the venue
     * @param venue_user - the user id of the venue
     * @returns The results of the query.
     */
    const updateVenueDetails = async(details, venue_user) => {
        const query = knex(VENUE_TABLE).update({details}).where({venue_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the guest capacity of a venue
     * @param guest_capacity - the new guest capacity of the venue
     * @param venue_user - the user id of the venue
     * @returns The results of the query.
     */
    const updateVenueCapacity = async(guest_capacity, venue_user) => {
        const query = knex(VENUE_TABLE).update({guest_capacity}).where({venue_user});
        const results = await query;
        return results;
    }
    /**
     * This function updates the availability of a venue
     * @param available - true or false
     * @param venue_user - the user id of the venue
     * @returns The results of the query.
     */
    const updateVenueAvailability = async(available, venue_user) => {
        const query = knex(VENUE_TABLE).update({available}).where({venue_user});
        const results = await query;
        return results;
    }
    /**
     * It updates the occasion column of the venue table with the occasion parameter, where the venue_user column is equal
     * to the venue_user parameter
     * @param occasion - the occasion that the user is looking for
     * @param venue_user - the user id of the venue
     * @returns The results of the query.
     */
    const updateVenueAddress = async(occasion, venue_user) => {
        const query = knex(VENUE_TABLE).update({occasion}).where({venue_user});
        const results = await query;
        return results;
    }
    /**
     * This function creates a new venue in the database
     * @param user_id - the id of the user who created the venue
     * @param name - name of the venue
     * @param phone_num - string
     * @param street - string
     * @param city - string
     * @param state_initial - 2 letter state abbreviation
     * @param availability - a string of the days of the week that the venue is available.
     * @param zip_code - int
     * @param cost - cost per hour
     * @param guest_capacity - number
     * @param details - string
     * @returns The results of the query.
     */
    const createVenue = async(user_id, name, phone_num, street, city, state_initial, availability, zip_code, cost, guest_capacity, details) => {
        const query = knex(VENUE_TABLE).insert({user_id, name, phone_num, street, city, state_initial, availability,zip_code, cost, guest_capacity, details});
        const results = await query;
        return results;
    }
    /**
     * This function takes in a venue number and a rating and updates the rating, rating_count, and rating_sum of the venue
     * in the database.
     * @param venue_num - the venue number of the venue you want to rate
     * @param rate - the rating the user gives the venue
     * @returns The rating, rating_count, and rating_sum are being returned.
     */
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
    /**
     * This function deletes a venue from the database
     * @param venue_user - The user id of the venue you want to delete.
     * @returns The results of the query.
     */
    const deleteVenue = async(venue_user) => {
        const query = knex(VENUE_TABLE).delete().where({venue_user});
        const results = await query;
        return results;
    }
 
 /* Exporting the functions that are defined in the file. */
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