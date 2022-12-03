const Performer = require('../models/performer');

/**
 * It fetches all the performers from the database and returns the result
 * @returns An array of objects
 */
const fetchAllPerformers = async() =>{
    const result = await Performer.fetchAllPerformers();
    return result;
}
/**
 * It fetches all performers associated with a user_id
 * @param user_id - The user_id of the user you want to fetch the performers for.
 * @returns An array of objects
 */
const fetchPerformersByUserID = async(user_id) => {
    const result = await Performer.fetchPerformersByUserID(user_id);
    return result;
}
/**
 * It fetches a performer by their performer_num.
 * @param performer_num - The performer's number in the database.
 */
const fetchPerformerByServID = async(performer_num)  => {
    const result = await Performer.fetchPerformerByServID(performer_num);
    return result;
}
/**
 * It fetches all performers from the database where the performer's available field is equal to the available parameter
 * @param available - true or false
 * @returns An array of objects
 */
const fetchPerformersByAvailable = async(available) => {
    const result = await Performer.fetchPerformersByAvailable(available);
    return result;
}
/**
 * This function updates the performer name in the database
 * @param performer_name - The new name of the performer
 * @param p_user - the performer's user id
 * @returns The result of the updatePerformerName function.
 */
const updatePerformerName = async(performer_name, p_user) => {
    const result = await Performer.updatePerformerName(performer_name, p_user);
    return result;
}
/**
 * This function updates the performer details in the database
 * @param details - an object containing the details to be updated
 * @param p_user - The performer's user object
 * @returns The result of the updatePerformerDetails function.
 */
const updatePerformerDetails = async(details, p_user) => {
    const result = await Performer.updatePerformerDetails(details, p_user);
    return result;
}
/**
 * This function updates the number of performers in the database
 * @param num_performers - the number of performers that the user has
 * @param p_user - the performer's username
 * @returns The result of the updateNumPerformers function.
 */
const updateNumPerformers = async(num_performers, p_user) => {
    const result = await Performer.updateNumPerformers(num_performers, p_user);
    return result;
}
/**
 * This function updates the availability of a performer in the database
 * @param available - true or false
 * @param p_user - the performer's username
 * @returns The result of the updatePerformerAvailability function.
 */
const updatePerformerAvailability = async(available, p_user) => {
    const result = await Performer.updatePerformerAvailability(available, p_user);
    return result;
}
/**
 * This function creates a new performer in the database
 * @param user_id - the id of the user who is creating the performer
 * @param name - string
 * @param phone_num - string
 * @param zip_code - string
 * @param availability - an array of strings, each string is a day of the week
 * @param details - {
 * @returns The result of the query.
 */
const createPerformer = async(user_id, name, phone_num, zip_code, availability, details) => {
    const result = await Performer.createPerformer(user_id, name, phone_num, zip_code, availability, details);
    return result;
}
/**
 * This function takes in a performer number and a rate and returns the result of the ratePerformer function in the
 * Performer model
 * @param performer_num - the performer's number
 * @param rate - the rate that the user wants to give to the performer
 * @returns The result of the ratePerformer function in the Performer model.
 */
const ratePerformer = async(performer_num, rate) =>{
    const result = await Performer.ratePerformer(performer_num, rate);
    return result;
}
/**
 * This function deletes a performer from the database
 * @param p_user - The user object that is being deleted.
 * @returns The result of the deletePerformer function.
 */
const deletePerformer = async(p_user) =>{
    const result = await Performer.deletePerformer(p_user);
    return result;
}
/**
 * This function updates the date booked for a performer
 * @param Booked - The date that the user booked the performer
 * @param food_user - the user who booked the food
 */
const updateDateBooked = async(Booked, food_user) => {
    const result = await Performer.updateDateBooked(Booked, p_user);
    return result;
}

/* Exporting all of the functions in the file so that they can be used in other files. */
module.exports = {
    updateDateBooked,
    fetchAllPerformers,
    ratePerformer,
    fetchPerformersByUserID,
    fetchPerformerByServID,
    fetchPerformersByAvailable,
    updatePerformerName,
    updatePerformerDetails,
    updateNumPerformers,
    updatePerformerAvailability,
    createPerformer,
    deletePerformer
}