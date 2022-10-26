const knex = require('../database/knex');

const PLANNERS_TABLE = 'planners';

const findUserByEmail = async(email) => {
    const query = knex(PLANNERS_TABLE).where({email});
    const result = await query;
    return result;
}

module.exports = {
    findUserByEmail
};