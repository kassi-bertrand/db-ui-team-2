class Venue {
    constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }
    close () {
        this.disconnect();
    }
    async fetchAllVenues () {
        const results = await this.DBQuery('SELECT * FROM venue');
        return results;
    }
    async fetchVenuesByName (venue_name) {
        const results = await this.DBQuery('SELECT * FROM venue WHERE venue_name = ?', [venue_name]);
        return results;
    }
    async fetchVenuesByUsername (venue_user) {
        const results = await this.DBQuery('SELECT * FROM venue WHERE venue_user = ?', [venue_user]);
        return results;
    }
    async fetchVenuesByZipCode (zip_code) {
        const results = await this.DBQuery('SELECT * FROM venue WHERE zip_code = ?', [zip_code]);
        return results;
    }
    async fetchVenuesByOccasion (occasion) {
        const results = await this.DBQuery('SELECT * FROM venue WHERE occasion = ?', [occasion]);
        return results;
    }
    async fetchVenuesByAvailable (available) {
        const results = await this.DBQuery('SELECT * FROM venue WHERE available = ?', [available]);
        return results;
    }
    async updateVenue(name, venue_user) {
        const results = await this.DBQuery('UPDATE venue SET name = ? WHERE venue_user = ?', [name, venue_user]);
        return results;
    }
    async createVenue(venue_user, venue_name, street, city, state_initial, zip_code, cost, details, guest_capacity, occasion, available) {
        const results = await this.DBQuery('INSERT INTO venue VALUES (?)', [venue_user, venue_name, street, city, state_initial, zip_code, cost, details, guest_capacity, occasion, available]);
        return results;
    }
    async deleteVenue(venue_user) {
        const results = await this.DBQuery('DELETE FROM venue WHERE venue_user = ?', [venue_user]);
        return results;
    }
 }
 module.exports = Venue;