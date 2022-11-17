const knex = require('../database/knex');

const FORM_TABLE = 'Form';

   const fetchAllForms = async () => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE);
       //console.log("knex? here!")
       console.log(query);
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
const createForm = async (Location, Budget, Details, Name, PhoneNum, EventDate, GuestCount,Occasion, form_user) => {
    //console.log(Location, Budget, Details, Name, PhoneNum, EventDate, GuestCount,Occasion);
    const query = knex(FORM_TABLE).insert({Location, Budget, Details, Name, PhoneNum, EventDate, GuestCount,Occasion, form_user});
    const results = await query;
    return results;
}
const deleteForm = async (form_num) => {
    const query = knex(FORM_TABLE).delete().where({form_num});
    const results = await query;
    return results;
}
module.exports = {
    fetchAllForms,
    fetchGuestCountByPhoneNum,
    fetchLocationByPhoneNum,
    fetchBudgetByPhoneNum,
    fetchDateByPhoneNum,
    fetchInfoByPhoneNum,
    createForm,
    deleteForm
 }