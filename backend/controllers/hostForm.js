const Form = require('../models/hostForm');

/*const fetchFoodsByUsername = async(food_user)  => {
    const result = await Food.fetchFoodsByUsername(food_user);
    return result;
}*/

const fetchAllForms = async () => {
    const result = await Form.fetchAllForms();
    return result;
}
const fetchInfoByUserId = async (user_id) => {
    const result = await Form.fetchInfoByUserId(user_id);
    return result;
}
const fetchInfoByPhoneNum = async (form_num) => {
//console.log("we reached here!")
    const result = await Form.fetchInfoByPhoneNum(form_num);
    return result;
}
const fetchDateByPhoneNum = async (form_num) => {
    //console.log("we reached here!")
        const result = await Form.fetchDateByPhoneNum(form_num);
        return result;
}
const fetchLocationByPhoneNum = async (form_num) => {
    //console.log("we reached here!")
        const result = await Form.fetchLocationByPhoneNum(form_num);
        return result;
}
const fetchGuestCountByPhoneNum = async (form_num) => {
    //console.log("we reached here!")
        const result = await Form.fetchGuestCountByPhoneNum(form_num);
        return result;
}
const fetchBudgetByPhoneNum = async (form_num) => {
    //console.log("we reached here!")
        const result = await Form.fetchBudgetByPhoneNum(form_num);
        return result;
}
const createForm = async (user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count,occasion, details) => {
    //console.log(Location, Budget, Details, Name, PhoneNum, EventDate, GuestCount,Occasion);
    const result = await Form.createForm(user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count,occasion, details);
    return result;
}
const deleteForm = async (form_num) => {
    const result = deleteForm(form_num);
    return result;
}
module.exports = {
    fetchInfoByUserId,
    fetchAllForms,
    fetchBudgetByPhoneNum,
    fetchLocationByPhoneNum,
    fetchGuestCountByPhoneNum,
    fetchInfoByPhoneNum,
    fetchDateByPhoneNum,
    createForm,
    deleteForm
}