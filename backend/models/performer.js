const knex = require('../database/knex');

const PERFORMER_TABLE = 'performer_details';

class Performer {
    constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }
    close () {
        this.disconnect();
    }
    async fetchAllPerformers () {
        const query = knex(PERFORMER_TABLE);
        const results = await query;
        return results;
    }
    async fetchPerformersByName (p_user) {
        const query = knex(PERFORMER_TABLE).where({p_user});
        const results = await query;
        return results;
    }
    async fetchPerformersByAvailable (available) {
        const query = knex(PERFORMER_TABLE).where({available});
        const results = await query;
        return results;
    }
    async updatePerformerName(performer_name, p_user) {
        const query = knex(PERFORMER_TABLE).update({performer_name}).where({p_user});
        const results = await query;
        return results;
    }
    async updatePerformerDetails(details, p_user) {
        const query = knex(PERFORMER_TABLE).update({details}).where({p_user});
        const results = await query;
        return results;
    }
    async updateNumPerformers(num_performers, p_user) {
        const query = knex(PERFORMER_TABLE).update({num_performers}).where({p_user});
        const results = await query;
        return results;
    }
    async updatePerformerAvailability(available, p_user) {
        const query = knex(PERFORMER_TABLE).update({available}).where({p_user});
        const results = await query;
        return results;
    }
    async createPerformer(p_user, performer_name, details, num_performers, available) {
        const query = knex(PERFORMER_TABLE).insert({p_user, performer_name, details, num_performers, available});
        const results = await query;
        return results;
    }
    async deletePerformer(p_user) {
        const query = knex(PERFORMER_TABLE).delete().where({p_user});
        const results = await query;
        return results;
    }
 }
 module.exports = Performer;