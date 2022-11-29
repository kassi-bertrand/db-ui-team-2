const knex = require('../database/knex');

const FORM_TABLE = 'Form';

   const fetchInfoWoCurrUser = async (user_id) => {
       const query = knex(FORM_TABLE).whereNot({ user_id }).orderBy('event_date', 'DESC');
       const results = await query;
       return results;
   }

   const fetchInfoByFormNum = async (form_num) => {
       const query = knex(FORM_TABLE).where({ form_num });
       const results = await query;
       return results;
   }
   const fetchInfoByUserId = async (user_id) => {
       const query = knex(FORM_TABLE).where({ user_id }).orderBy('event_date', 'DESC');//.select("EventDate");
       const results = await query;
       return results;
   }
   const fetchInfoByCity = async (city) => {
       const query = knex(FORM_TABLE).where({ city }).orderBy('event_date', 'DESC');//.select("EventDate");
       const results = await query;
       return results;
   }
   const fetchInfoByDate = async (event_date) => {
       const query = knex(FORM_TABLE).where({ event_date }).orderBy('event_date', 'DESC');//.select("EventDate");
       const results = await query;
       return results;
   }
   const fetchInfoByName = async (name) => {
       const query = knex(FORM_TABLE).where({ name }).orderBy('event_date', 'DESC');//.select("EventDate");
       const results = await query;
       return results;
   }
   
   const fetchDateByFormNum = async (form_num) => {
       const query = knex(FORM_TABLE).where({ form_num }).select("EventDate");
       const results = await query;
       return results;
   }
   const fetchLocationByFormNum = async (form_num) => {
       const query = knex(FORM_TABLE).where({ form_num }).select("Location");
       const results = await query;
       return results;
   }
   const fetchGuestCountByFormNum = async (form_num) => {
       const query = knex(FORM_TABLE).where({ form_num }).select("GuestCount");
       const results = await query;
       return results;
   }
   const fetchBudgetByFormNum = async (form_num) => {
       const query = knex(FORM_TABLE).where({ form_num }).select("Budget");
       const results = await query;
       return results;
   }
const createForm = async (user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count,occasion, details) => {
    const query = knex(FORM_TABLE).insert({user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count,occasion, details});
    const results = await query;
    return results;
}
const deleteForm = async (form_num) => {
    const query = knex(FORM_TABLE).delete().where({form_num});
    const results = await query;
    return results;
}
module.exports = {
    fetchInfoByUserId,
    fetchInfoWoCurrUser,
    fetchInfoByCity,
    fetchInfoByDate,
    fetchInfoByName,
    fetchGuestCountByFormNum,
    fetchLocationByFormNum,
    fetchBudgetByFormNum,
    fetchDateByFormNum,
    fetchInfoByFormNum,
    createForm,
    deleteForm,
    fetchLocationByFormNum,
    fetchGuestCountByFormNum,
    fetchBudgetByFormNum
 }