const Form = require('../models/hostForm');

/**
 * It fetches the information of all users except the current user
 * @param user_id - the user_id of the user whose information you don't want to fetch
 * @returns The result of the fetchInfoWoCurrUser function.
 */
const fetchInfoWoCurrUser = async (user_id) => {
    const result = await Form.fetchInfoWoCurrUser(user_id);
    return result;
}
/**
 * It fetches the information of a user by their user_id
 * @param user_id - The user_id of the user you want to fetch the info of.
 * @returns An array of objects.
 */
const fetchInfoByUserId = async (user_id) => {
    const result = await Form.fetchInfoByUserId(user_id);
    return result;
}
/**
 * It takes a city name as an argument, and returns the result of the fetchInfoByCity function from the Form class
 * @param city - The city you want to search for.
 * @returns The result of the fetchInfoByCity function.
 */
const fetchInfoByCity = async (city) => {
    const result = await Form.fetchInfoByCity(city);
    return result;
}
/**
 * It takes a date as an argument, and returns an array of objects containing information about events that occur on that
 * date
 * @param event_date - The date of the event.
 * @returns An array of objects.
 */
const fetchInfoByDate = async (event_date) => {
    const result = await Form.fetchInfoByDate(event_date);
    return result;
}
/**
 * It fetches the information of a form by its name
 * @param name - The name of the form you want to fetch.
 * @returns The result of the function fetchInfoByName
 */
const fetchInfoByName = async (name) => {
    const result = await Form.fetchInfoByName(name);
    return result;
}
/**
 * It fetches the information of a form by its form number
 * @param form_num - The form number of the form you want to fetch.
 * @returns The result of the function is being returned.
 */
const fetchInfoByFormNum = async (form_num) => {
    const result = await Form.fetchInfoByFormNum(form_num);
    return result;
}
/**
 * It fetches the date of a form by its form number
 * @param form_num - The form number of the form you want to fetch the date of.
 * @returns The result of the query.
 */
const fetchDateByFormNum = async (form_num) => {
        const result = await Form.fetchDateByFormNum(form_num);
        return result;
}
/**
 * It fetches the location of a form by its form number
 * @param form_num - The form number of the form you want to fetch the location of.
 * @returns The result of the fetchLocationByFormNum function.
 */
const fetchLocationByFormNum = async (form_num) => {
        const result = await Form.fetchLocationByFormNum(form_num);
        return result;
}
/**
 * It fetches the guest count for a given form number
 * @param form_num - The form number of the form you want to fetch the guest count for.
 * @returns The number of guests that are attending the event.
 */
const fetchGuestCountByFormNum = async (form_num) => {
        const result = await Form.fetchGuestCountByFormNum(form_num);
        return result;
}
/**
 * It fetches a budget from the database by form number
 * @param form_num - The form number of the form you want to fetch the budget for.
 * @returns The result of the fetchBudgetByFormNum function.
 */
const fetchBudgetByFormNum = async (form_num) => {
        const result = await Form.fetchBudgetByFormNum(form_num);
        return result;
}
/**
 * This function creates a new form in the database
 * @param user_id - the id of the user who created the form
 * @param name - String
 * @param phone_num - string
 * @param street - string
 * @param city - string
 * @param state - state abbreviation
 * @param zip_code - string
 * @param event_date - Date
 * @param budget - number
 * @param guest_count - number
 * @param occasion -
 * @param details - string
 * @returns The result of the createForm function is being returned.
 */
const createForm = async (user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count,occasion, details) => {
    const result = await Form.createForm(user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count,occasion, details);
    return result;
}
/**
 * It deletes a form.
 * @param form_num - The form number of the form you want to delete.
 * @returns The result of the deleteForm function.
 */
const deleteForm = async (form_num) => {
    const result = deleteForm(form_num);
    return result;
}
/* Exporting the functions that are defined in the file. */
module.exports = {
    fetchInfoByUserId,
    fetchInfoWoCurrUser,
    fetchInfoByCity,
    fetchInfoByDate,
    fetchInfoByName,
    fetchInfoByFormNum,
    fetchDateByFormNum,
    createForm,
    deleteForm,
    fetchLocationByFormNum,
    fetchGuestCountByFormNum,
    fetchBudgetByFormNum
}