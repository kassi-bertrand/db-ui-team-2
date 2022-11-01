const knex = require('../database/knex');

const VENUE_TABLE = 'venue_details';

class Venue {
    constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }
    close () {
        this.disconnect();
    }
    async fetchAllVenues () {
        const query = knex(VENUE_TABLE);
        const results = await query;
        return results;
    }
    async fetchVenuesByUsername (venue_user) {
        const query = knex(VENUE_TABLE).where(venue_user);
        const results = await query;
        return results;
    }
    async fetchVenuesByName (venue_name) {
        const query = knex(VENUE_TABLE).where(venue_name);
        const results = await query;
        return results;
    }
    async fetchVenuesByZipCode (zip_code) {
        const query = knex(VENUE_TABLE).where(zip_code);
        const results = await query;
        return results;
    }
    async fetchVenuesByOccasion (occasion) {
        const query = knex(VENUE_TABLE).where(occasion);
        const results = await query;
        return results;
    }
    async fetchVenuesByAvailable (available) {
        const query = knex(VENUE_TABLE).where(available);
        const results = await query;
        return results;
    }
    async updateVenueName(venue_name, venue_user) {
        const query = knex(VENUE_TABLE).update({venue_name}).where({venue_user});
        const results = await query;
        return results;
    }
    async updateVenueCost(cost, venue_user) {
        const query = knex(VENUE_TABLE).update({cost}).where({venue_user});
        const results = await query;
        return results;
    }
    async updateOccassion(occasion, venue_user) {
        const query = knex(VENUE_TABLE).update({occasion}).where({venue_user});
        const results = await query;
        return results;
    }
    async updateVenueDetails(details, venue_user) {
        const query = knex(VENUE_TABLE).update({details}).where({venue_user});
        const results = await query;
        return results;
    }
    async updateVenueCapacity(guest_capacity, venue_user) {
        const query = knex(VENUE_TABLE).update({guest_capacity}).where({venue_user});
        const results = await query;
        return results;
    }
    async updateVenueAvailability(available, venue_user) {
        const query = knex(VENUE_TABLE).update({available}).where({venue_user});
        const results = await query;
        return results;
    }
    async updateVenueAddress(occasion, venue_user) {
        const query = knex(VENUE_TABLE).update({occasion}).where({venue_user});
        const results = await query;
        return results;
    }
    async createVenue(venue_user, venue_name, street, city, state_initial, zip_code, cost, details, guest_capacity, occasion, available) {
        const query = knex(VENUE_TABLE).insert({venue_user, venue_name, street, city, state_initial, zip_code, cost, details, guest_capacity, occasion, available});
        const results = await query;
        return results;
    }
    async deleteVenue(venue_user) {
        const query = knex(VENUE_TABLE).delete().where({venue_user});
        const results = await query;
        return results;
    }
 }
 module.exports = Venue;