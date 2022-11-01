const Venue = require('../models/venue');

const fetchAllVenues = async() => {
    const result = await Venue.fetchAllVenues();
    return result;
}
const fetchVenuesByName = async(venue_name) =>{
    const result = await Venue.fetchVenuesByName(venue_name);
    return result;
}
const fetchVenuesByUsername = async(venue_user) =>{
    const result = await Venue.fetchVenuesByUsername(venue_user);
    return result;
}
const fetchVenuesByZipCode = async(zip_code) => {
    const result = await Venue.fetchVenuesByZipCode(zip_code);
    return result;
}
const fetchVenuesByOccasion = async(occasion) =>{
    const result = await Venue.fetchVenuesByOccasion(occasion);
    return result;
}
const fetchVenuesByAvailable = async(available) =>{
    const result = await Venue.fetchVenuesByAvailable(available);
    return result;
}
const updateVenue= async (name, venue_user) =>{
    const result = await Venue.updateVenue(name, venue_user);
    return result;
}
const createVenue = async(venue_user, venue_name, street, city, state_initial, zip_code, cost, details, guest_capacity, occasion, available) => {
    const result = await Venue.createVenue(venue_user, venue_name, street, city, state_initial, zip_code, cost, details, guest_capacity, occasion, available);
    return result;
}
const deleteVenue = async(venue_user) =>{
    const result = await Venue.deleteVenue(venue_user);
    return result;
}

module.exports = {
    fetchAllVenues,
    fetchVenuesByName,
    fetchVenuesByUsername,
    fetchVenuesByZipCode,
    fetchVenuesByOccasion,
    fetchVenuesByAvailable,
    updateVenue,
    createVenue,
    deleteVenue
};