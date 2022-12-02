//models made by Safwan Majeed
const knex = require('../database/knex');

const FORM_TABLE = 'Form';

   /**
    * It fetches all the rows from the database table, except the one that has the user_id that was passed in as an
    * argument
    * @param user_id - the user_id of the current user
    * @returns An array of objects.
    */
   const fetchInfoWoCurrUser = async (user_id) => {
       const query = knex(FORM_TABLE).whereNot({ user_id }).orderBy('event_date', 'DESC');
       const results = await query;
       return results;
   }

   /**
    * It takes a form number as an argument, and returns the form information from the database
    * @param form_num - the form number of the form you want to fetch
    * @returns An array of objects.
    */
   const fetchInfoByFormNum = async (form_num) => {
       const query = knex(FORM_TABLE).where({ form_num });
       const results = await query;
       return results;
   }
   /**
    * It returns a list of all the forms that a user has submitted
    * @param user_id - the user_id of the user you want to get the info for
    * @returns An array of objects.
    */
   const fetchInfoByUserId = async (user_id) => {
       const query = knex(FORM_TABLE).where({ user_id }).orderBy('event_date', 'DESC');
       const results = await query;
       return results;
   }
   /**
    * It takes a city name as an argument, and returns an array of objects containing information about events that have
    * happened in that city
    * @param city - The city you want to search for.
    * @returns An array of objects.
    */
   const fetchInfoByCity = async (city) => {
       const query = knex(FORM_TABLE).where({ city }).orderBy('event_date', 'DESC');
       const results = await query;
       return results;
   }
   /**
    * It takes a date as an argument, and returns an array of objects, each object representing a form submission
    * @param event_date - the date of the event
    * @returns An array of objects.
    */
   const fetchInfoByDate = async (event_date) => {
       const query = knex(FORM_TABLE).where({ event_date }).orderBy('event_date', 'DESC');
       const results = await query;
       return results;
   }
   /**
    * It takes a name as an argument, and returns the most recent form submission for that name
    * @param name - The name of the form you want to retrieve.
    * @returns An array of objects.
    */
   const fetchInfoByName = async (name) => {
       const query = knex(FORM_TABLE).where({ name }).orderBy('event_date', 'DESC');
       const results = await query;
       return results;
   }
   
   /**
    * It takes a form number as an argument, and returns the date of the event associated with that form number
    * @param form_num - the form number of the form you want to get the date of
    * @returns The date of the event.
    */
   const fetchDateByFormNum = async (form_num) => {
       const query = knex(FORM_TABLE).where({ form_num }).select("EventDate");
       const results = await query;
       return results;
   }
   /**
    * It takes a form number as an argument, and returns the location of the form
    * @param form_num - the form number of the form you want to get the location of
    * @returns The location of the form number.
    */
   const fetchLocationByFormNum = async (form_num) => {
       const query = knex(FORM_TABLE).where({ form_num }).select("Location");
       const results = await query;
       return results;
   }
   /**
    * It returns the number of guests associated with a given form number
    * @param form_num - the form number of the form you want to get the guest count from
    * @returns The number of guests for a given form number.
    */
   const fetchGuestCountByFormNum = async (form_num) => {
       const query = knex(FORM_TABLE).where({ form_num }).select("GuestCount");
       const results = await query;
       return results;
   }
   /**
    * It takes a form number as an argument, and returns the budget associated with that form number
    * @param form_num - the form number of the form you want to fetch the budget for
    * @returns The budget for the form number that was passed in.
    */
   const fetchBudgetByFormNum = async (form_num) => {
       const query = knex(FORM_TABLE).where({ form_num }).select("Budget");
       const results = await query;
       return results;
   }
/**
 * This function creates a new form in the database
 * @param user_id - the id of the user who created the form
 * @param name - string
 * @param phone_num - string
 * @param street - string
 * @param city - string
 * @param state - state abbreviation
 * @param zip_code - number
 * @param event_date - date
 * @param budget - number
 * @param guest_count - number
 * @param occasion - string
 * @param details - string
 */
const createForm = async (user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count,occasion, details) => {
    const query = knex(FORM_TABLE).insert({user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count,occasion, details});
    const results = await query;
    return results;
}
/**
 * This function deletes a form from the database
 * @param form_num - the form number of the form you want to delete
 * @returns The number of rows deleted.
 */
const deleteForm = async (form_num) => {
    const query = knex(FORM_TABLE).delete().where({form_num});
    const results = await query;
    return results;
}
/* Exporting the functions that are defined in the file. */
module.exports = {
    fetchInfoByUserId,
    fetchInfoWoCurrUser,
    fetchInfoByCity,
    fetchInfoByDate,
    fetchInfoByName,
    fetchDateByFormNum,
    fetchInfoByFormNum,
    createForm,
    deleteForm,
    fetchLocationByFormNum,
    fetchGuestCountByFormNum,
    fetchBudgetByFormNum
 }