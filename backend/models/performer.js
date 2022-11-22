const knex = require('../database/knex');

const PERFORMER_TABLE = 'performer_details';

    const fetchAllPerformers = async() => {
        const query = knex(PERFORMER_TABLE);
        const results = await query;
        return results;
    }
    const fetchPerformersByName = async(p_user) => {
        const query = knex(PERFORMER_TABLE).where({p_user});
        const results = await query;
        return results;
    }
    const fetchPerformersByAvailable = async(available) => {
        const query = knex(PERFORMER_TABLE).where({available});
        const results = await query;
        return results;
    }
    const updatePerformerName = async(performer_name, p_user) => {
        const query = knex(PERFORMER_TABLE).update({performer_name}).where({p_user});
        const results = await query;
        return results;
    }
    const updatePerformerDetails = async(details, p_user) => {
        const query = knex(PERFORMER_TABLE).update({details}).where({p_user});
        const results = await query;
        return results;
    }
    const updateNumPerformers = async(num_performers, p_user) => {
        const query = knex(PERFORMER_TABLE).update({num_performers}).where({p_user});
        const results = await query;
        return results;
    }
    const updatePerformerAvailability = async(available, p_user) => {
        const query = knex(PERFORMER_TABLE).update({available}).where({p_user});
        const results = await query;
        return results;
    }
    const createPerformer = async(user_id, name, phone_num, zip_code, details) => {
        const query = knex(PERFORMER_TABLE).insert({user_id, name, phone_num, zip_code, details});
        const results = await query;
        return results;
    }
    const deletePerformer = async(p_user) => {
        const query = knex(PERFORMER_TABLE).delete().where({p_user});
        const results = await query;
        return results;
    }
    const updateDateBooked = async(Booked, p_user) => {
        const query = knex(FOOD_TABLE).where({food_user}).update({ Booked: knex.raw('CONCAT(Booked, ?)',[','+Booked]) });
        const results = await query;
        return results;
    }
 
 module.exports  = {
    updateDateBooked,
    fetchAllPerformers,
    fetchPerformersByName,
    fetchPerformersByAvailable,
    updatePerformerName,
    updatePerformerDetails,
    updateNumPerformers,
    updatePerformerAvailability,
    createPerformer,
    deletePerformer
 }