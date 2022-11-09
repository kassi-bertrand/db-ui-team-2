const Form = require('../models/hostForm');

/*const fetchFoodsByUsername = async(food_user)  => {
    const result = await Food.fetchFoodsByUsername(food_user);
    return result;
}*/

const fetchAllForms = async () => {
    const result = await Form.fetchAllForms();
    return result;
}
const fetchInfoByPhoneNum = async (PhoneNum) => {
//console.log("we reached here!")
    const result = await Form.fetchInfoByPhoneNum(PhoneNum);
    return result;
}
const fetchDateByPhoneNum = async (PhoneNum) => {
    //console.log("we reached here!")
        const result = await Form.fetchDateByPhoneNum(PhoneNum);
        return result;
}
const createForm = async (Location, Budget, Details, Name, PhoneNum, EventDate, GuestCount,Occasion, form_user) => {
    //console.log(Location, Budget, Details, Name, PhoneNum, EventDate, GuestCount,Occasion);
    const result = await Form.createForm(Location, Budget, Details, Name, PhoneNum, EventDate, GuestCount,Occasion, form_user);
    return result;
}
const deleteForm = async (PhoneNum) => {
    const result = deleteForm(PhoneNum);
    return result;
}
module.exports = {
    fetchAllForms,
    fetchInfoByPhoneNum,
    fetchDateByPhoneNum,
    createForm,
    deleteForm
 }