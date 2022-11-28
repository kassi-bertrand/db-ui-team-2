const Venue = require('../models/venue');

const fetchAllVenues = async() => {
    const result = await Venue.fetchAllVenues();
    return result;
}
const fetchVenuesByName = async(venue_name) =>{
    const result = await Venue.fetchVenuesByName(venue_name);
    return result;
}
const fetchVenuesByServID = async(venue_num)  => {
    const result = await Food.fetchVenuesByServID(venue_num);
    return result;
}
const fetchVenuesByVenueNum = async(venue_num) =>{
    const result = await Venue.fetchVenuesByUsername(venue_num);
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
const updateVenueName = async (venue_name, venue_user) =>{
    const result = await Venue.updateVenueName(venue_name, venue_user);
    return result;
}
const updateVenueCost = async (cost, venue_user) =>{
    const result = await Venue.updateVenueCost(cost, venue_user);
    return result;
}
const updateOccassion = async (occasion, venue_user) =>{
    const result = await Venue.updateOccassion(occasion, venue_user);
    return result;
}
const updateVenueDetails = async (details, venue_user) =>{
    const result = await Venue.updateVenueDetails(details, venue_user);
    return result;
}
const updateVenueCapacity = async (guest_capacity, venue_user) =>{
    const result = await Venue.updateVenueCapacity(guest_capacity, venue_user);
    return result;
}
const updateVenueAvailability = async (available, venue_user) =>{
    const result = await Venue.updateVenueAvailability(available, venue_user);
    return result;
}
const updateVenueAddress = async(street, city, state_initial, zip_code, venue_user) => {
    const result = await Venue.updateVenueAddress(street, city, state_initial, zip_code, venue_user);
    return result;
}
const createVenue = async(user_id, name, phone_num, street, city, state_initial, zip_code, cost, guest_capacity, details) => {
    const result = await Venue.createVenue(user_id, name, phone_num, street, city, state_initial, zip_code, cost, guest_capacity, details);
    return result;
}
const deleteVenue = async(venue_user) =>{
    const result = await Venue.deleteVenue(venue_user);
    return result;
}

module.exports = {
    fetchAllVenues,
    fetchVenuesByName,
    fetchVenuesByServID,
    fetchVenuesByVenueNum,
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