const Performer = require('../models/performer');

const fetchAllPerformers = async() =>{
    const result = await Performer.fetchAllPerformers();
    return result;
}
const fetchPerformersByName = async(p_user) => {
    const result = await Performer.fetchPerformersByName(p_user);
    return result;
}
const fetchPerformerByServID = async(performer_num)  => {
    const result = await Performer.fetchPerformerByServID(performer_num);
    return result;
}
const fetchPerformersByAvailable = async(available) => {
    const result = await Performer.fetchPerformersByAvailable(available);
    return result;
}
const updatePerformerName = async(performer_name, p_user) => {
    const result = await Performer.updatePerformerName(performer_name, p_user);
    return result;
}
const updatePerformerDetails = async(details, p_user) => {
    const result = await Performer.updatePerformerDetails(details, p_user);
    return result;
}
const updateNumPerformers = async(num_performers, p_user) => {
    const result = await Performer.updateNumPerformers(num_performers, p_user);
    return result;
}
const updatePerformerAvailability = async(available, p_user) => {
    const result = await Performer.updatePerformerAvailability(available, p_user);
    return result;
}
const createPerformer = async(user_id, name, phone_num, zip_code, availability, details) => {
    const result = await Performer.createPerformer(user_id, name, phone_num, zip_code, availability, details);
    return result;
}
const deletePerformer = async(p_user) =>{
    const result = await Performer.deletePerformer(p_user);
    return result;
}

module.exports = {
    fetchAllPerformers,
    fetchPerformersByName,
    fetchPerformerByServID,
    fetchPerformersByAvailable,
    updatePerformerName,
    updatePerformerDetails,
    updateNumPerformers,
    updatePerformerAvailability,
    createPerformer,
    deletePerformer
}