const knex = require('../database/knex');

const VENUE_TABLE = 'venue_details';

    const fetchAllVenues = async() => {
        const query = knex(VENUE_TABLE);
        const results = await query;
        return results;
    }
    const fetchVenuesByUsername = async(venue_user) => {
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
    const createVenue = async(user_id, name, phone_num, street, city, state_initial, zip_code, cost, guest_capacity, details) => {
        const query = knex(VENUE_TABLE).insert({user_id, name, phone_num, street, city, state_initial, zip_code, cost, guest_capacity, details});
        const results = await query;
        return results;
    }
    const deleteVenue = async(venue_user) => {
        const query = knex(VENUE_TABLE).delete().where({venue_user});
        const results = await query;
        return results;
    }
 
 module.exports = {
    fetchAllVenues,
    fetchVenuesByName,
    fetchVenuesByUsername,
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
    deleteVenue
 };