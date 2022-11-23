const Form = require('../models/hostForm');

/*const fetchFoodsByUsername = async(food_user)  => {
    const result = await Food.fetchFoodsByUsername(food_user);
    return result;
}*/

const fetchInfoWoCurrUser = async (user_id) => {
    const result = await Form.fetchInfoWoCurrUser(user_id);
    return result;
}
const fetchInfoByUserId = async (user_id) => {
    const result = await Form.fetchInfoByUserId(user_id);
    return result;
}
const fetchInfoByCity = async (city) => {
    const result = await Form.fetchInfoByCity(city);
    return result;
}
const fetchInfoByDate = async (event_date) => {
    const result = await Form.fetchInfoByDate(event_date);
    return result;
}
const fetchInfoByName = async (name) => {
    const result = await Form.fetchInfoByDate(name);
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
    fetchInfoWoCurrUser,
    fetchInfoByCity,
    fetchInfoByDate,
    fetchInfoByName,
    fetchBudgetByPhoneNum,
    fetchLocationByPhoneNum,
    fetchGuestCountByPhoneNum,
    fetchInfoByPhoneNum,
    fetchDateByPhoneNum,
    createForm,
    deleteForm
}