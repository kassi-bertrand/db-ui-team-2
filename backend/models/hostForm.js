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
   const fetchInfoByPhoneNum = async (PhoneNum) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ PhoneNum })//.select("EventDate");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchDateByPhoneNum = async (PhoneNum) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ PhoneNum }).select("EventDate");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchLocationByPhoneNum = async (PhoneNum) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ PhoneNum }).select("Location");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchGuestCountByPhoneNum = async (PhoneNum) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ PhoneNum }).select("GuestCount");
       console.log("knex? here!")
      // console.log(query);
       const results = await query;
       //console.log("results");
       return results;
   }
   const fetchBudgetByPhoneNum = async (PhoneNum) => {
    //console.log("we reached here!")
       const query = knex(FORM_TABLE).where({ PhoneNum }).select("Budget");
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
const deleteForm = async (PhoneNum) => {
    const query = knex(FORM_TABLE).delete().where({PhoneNum});
    const results = await query;
    return results;
}
module.exports = {
    fetchAllForms,
    fetchDateByPhoneNum,
    fetchInfoByPhoneNum,
    createForm,
    deleteForm,
    fetchLocationByPhoneNum,
    fetchGuestCountByPhoneNum,
    fetchBudgetByPhoneNum
 }