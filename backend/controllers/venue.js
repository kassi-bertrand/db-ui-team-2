const Venue = require('../models/venue');

/**
 * It fetches all venues from the database and returns the result
 * @returns An array of objects
 */
const fetchAllVenues = async() => {
    const result = await Venue.fetchAllVenues();
    return result;
}
/**
 * This function fetches all venues associated with a user_id
 * @param user_id - the user_id of the user whose venues you want to fetch
 * @returns An array of venues
 */
const fetchVenuesByUserID = async(user_id) =>{
    const result = await Venue.fetchVenuesByUserID(user_id);
    return result;
}
/**
 * This function fetches all venues that have a specific service ID
 * @param venue_num - the venue number
 */
const fetchVenuesByServID = async(venue_num)  => {
    const result = await Venue.fetchVenuesByServID(venue_num);
    return result;
}
/**
 * This function fetches all the venues that have the same venue_num as the one passed in
 * @param venue_num - the venue number of the venue you want to fetch
 */
const fetchVenuesByVenueNum = async(venue_num) =>{
    const result = await Venue.fetchVenuesByUsername(venue_num);
    return result;
}
/**
 * It takes a zip code as an argument, and returns a list of venues in that zip code
 * @param zip_code - The zip code of the venue
 * @returns An array of objects
 */
const fetchVenuesByZipCode = async(zip_code) => {
    const result = await Venue.fetchVenuesByZipCode(zip_code);
    return result;
}
/**
 * It fetches venues by occasion
 * @param occasion - The occasion for which you want to fetch venues.
 * @returns An array of venues
 */
const fetchVenuesByOccasion = async(occasion) =>{
    const result = await Venue.fetchVenuesByOccasion(occasion);
    return result;
}
/**
 * It fetches venues by available
 * @param available - true or false
 * @returns The result of the fetchVenuesByAvailable function.
 */
const fetchVenuesByAvailable = async(available) =>{
    const result = await Venue.fetchVenuesByAvailable(available);
    return result;
}
/**
 * This function updates the venue name in the database
 * @param venue_name - The name of the venue
 * @param venue_user - the user id of the venue
 * @returns The result of the updateVenueName function.
 */
const updateVenueName = async (venue_name, venue_user) =>{
    const result = await Venue.updateVenueName(venue_name, venue_user);
    return result;
}
/**
 * This function updates the cost of a venue in the database
 * @param cost - the cost of the venue
 * @param venue_user - the user id of the venue
 * @returns The result of the updateVenueCost function.
 */
const updateVenueCost = async (cost, venue_user) =>{
    const result = await Venue.updateVenueCost(cost, venue_user);
    return result;
}
/**
 * It updates the occassion of a venue
 * @param occasion - The occasion you want to update
 * @param venue_user - The venue_user object that was returned from the createVenueUser function.
 * @returns The result of the updateOccassion function.
 */
const updateOccassion = async (occasion, venue_user) =>{
    const result = await Venue.updateOccassion(occasion, venue_user);
    return result;
}
/**
 * This function updates the details of a venue
 * @param details - an object containing the details of the venue
 * @param venue_user - the user object of the venue
 * @returns The result of the updateVenueDetails function.
 */
const updateVenueDetails = async (details, venue_user) =>{
    const result = await Venue.updateVenueDetails(details, venue_user);
    return result;
}
/**
 * This function updates the guest capacity of a venue
 * @param guest_capacity - the new guest capacity of the venue
 * @param venue_user - the user id of the venue
 * @returns The result of the updateVenueCapacity function.
 */
const updateVenueCapacity = async (guest_capacity, venue_user) =>{
    const result = await Venue.updateVenueCapacity(guest_capacity, venue_user);
    return result;
}
/**
 * This function updates the availability of a venue
 * @param available - true or false
 * @param venue_user - the user id of the venue
 * @returns The result of the updateVenueAvailability function.
 */
const updateVenueAvailability = async (available, venue_user) =>{
    const result = await Venue.updateVenueAvailability(available, venue_user);
    return result;
}
/**
 * This function updates the address of a venue
 * @param street - the street address of the venue
 * @param city - string
 * @param state_initial - The two letter abbreviation for the state.
 * @param zip_code - String
 * @param venue_user - the user id of the venue
 * @returns The result of the updateVenueAddress function.
 */
const updateVenueAddress = async(street, city, state_initial, zip_code, venue_user) => {
    const result = await Venue.updateVenueAddress(street, city, state_initial, zip_code, venue_user);
    return result;
}
/**
 * This function creates a new venue in the database.
 * @param user_id - the id of the user who created the venue
 * @param name - string
 * @param phone_num - string
 * @param street - string
 * @param city - string
 * @param state_initial - 2 letter state abbreviation
 * @param availability - a string of the form "YYYY-MM-DD HH:MM:SS"
 * @param zip_code - int
 * @param cost - the cost of the venue
 * @param guest_capacity - number
 * @param details - string
 * @returns The result of the createVenue function.
 */
const createVenue = async(user_id, name, phone_num, street, city, state_initial, availability, zip_code, cost, guest_capacity, details) => {
    const result = await Venue.createVenue(user_id, name, phone_num, street, city, state_initial, availability, zip_code, cost, guest_capacity, details);
    return result;
}
/**
 * This function takes in a venue number and a rating and returns the result of the rateVenue function in the Venue class
 * @param venue_num - the venue number of the venue you want to rate
 * @param rate - the rating of the venue
 * @returns The result of the rateVenue function.
 */
const rateVenue = async(venue_num, rate) =>{
    const result = await Venue.rateVenue(venue_num, rate);
    return result;
}
/**
 * This function deletes a venue from the database
 * @param venue_user - The user_id of the venue you want to delete.
 * @returns The result of the deleteVenue function.
 */
const deleteVenue = async(venue_user) =>{
    const result = await Venue.deleteVenue(venue_user);
    return result;
}

/* Exporting all of the functions in the file. */
module.exports = {
    fetchAllVenues,
    fetchVenuesByUserID,
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
    rateVenue,
    deleteVenue
};