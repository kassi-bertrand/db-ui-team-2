const Form = require('../models/hostForm');

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
    const result = await Form.fetchInfoByName(name);
    return result;
}
const fetchInfoByFormNum = async (form_num) => {
    const result = await Form.fetchInfoByFormNum(form_num);
    return result;
}
const fetchDateByFormNum = async (form_num) => {
        const result = await Form.fetchDateByFormNum(form_num);
        return result;
}
const fetchLocationByFormNum = async (form_num) => {
        const result = await Form.fetchLocationByFormNum(form_num);
        return result;
}
const fetchGuestCountByFormNum = async (form_num) => {
        const result = await Form.fetchGuestCountByFormNum(form_num);
        return result;
}
const fetchBudgetByFormNum = async (form_num) => {
        const result = await Form.fetchBudgetByFormNum(form_num);
        return result;
}
const createForm = async (user_id, name, phone_num, street, city, state, zip_code, event_date, budget, guest_count,occasion, details) => {
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
    fetchInfoByFormNum,
    fetchDateByFormNum,
    createForm,
    deleteForm,
    fetchLocationByFormNum,
    fetchGuestCountByFormNum,
    fetchBudgetByFormNum
}