class Performer {
    constructor(_DBQuery, _disconnect) {
        this.DBQuery = _DBQuery;
        this.disconnect = _disconnect;
    }
    close () {
        this.disconnect();
    }
    async fetchAllPerformers () {
        const results = await this.DBQuery('SELECT * FROM performer');
        return results;
    }
    async fetchPerformersByName (p_user) {
        const results = await this.DBQuery('SELECT * FROM performer WHERE p_user = ?', [p_user]);
        return results;
    }
    async fetchPerformersByAvailable (available) {
        const results = await this.DBQuery('SELECT * FROM performer WHERE available = ?', [available]);
        return results;
    }
    async updatePerformer(performer_name, p_user) {
        const results = await this.DBQuery('UPDATE performer SET performer_name = ? WHERE p_user = ?', [performer_name, p_user]);
        return results;
    }
    async createPerformer(p_user, performer_name, details, num_performers, available) {
        const results = await this.DBQuery('INSERT INTO performer VALUES (?)', [p_user, performer_name, details, num_performers, available]);
        return results;
    }
    async deletePerformer(p_user) {
        const results = await this.DBQuery('DELETE FROM performer WHERE p_user = ?', [p_user]);
        return results;
    }
 }
 module.exports = Performer;