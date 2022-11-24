const knex = require('../database/knex');

const FORM_TABLE = 'Form';

   const fetchInfoWoCurrUser = async (user_id) => {
    console.log("we reached here!")
       const query = knex(FORM_TABLE).whereNot({ user_id }).orderBy('event_date', 'DESC');
       //console.log("knex? here!")
       //console.log(query);
       const results = await query;
       return results;
   }

   const fetchInfoByPhoneNum = async (form_num) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ form_num })//.select("EventDate");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchInfoByUserId = async (user_id) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ user_id }).orderBy('event_date', 'DESC');//.select("EventDate");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchInfoByCity = async (city) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ city }).orderBy('event_date', 'DESC');//.select("EventDate");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchInfoByDate = async (event_date) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ event_date }).orderBy('event_date', 'DESC');//.select("EventDate");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchInfoByName = async (name) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ name }).orderBy('event_date', 'DESC');//.select("EventDate");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   
   const fetchDateByPhoneNum = async (form_num) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ form_num }).select("EventDate");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchLocationByPhoneNum = async (form_num) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ form_num }).select("Location");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchGuestCountByPhoneNum = async (form_num) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ form_num }).select("GuestCount");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchBudgetByPhoneNum = async (form_num) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ form_num }).select("Budget");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
const createForm = async (user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count,occasion, details) => {
    //console.log(Location, Budget, Details, Name, PhoneNum, EventDate, GuestCount,Occasion);
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
    fetchGuestCountByPhoneNum,
    fetchLocationByPhoneNum,
    fetchBudgetByPhoneNum,
    fetchDateByPhoneNum,
    fetchInfoByPhoneNum,
    createForm,
    deleteForm
 }