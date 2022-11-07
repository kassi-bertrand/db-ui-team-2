const knex = require('../database/knex');
const REVIEWS_TABLE = 'reviews';

const fetchAllReviews = async() => {
    const query = knex(REVIEWS_TABLE);
    const results = await query;
    return results;
}
const fetchReviewsByAuthor = async(author) => {
    const query = knex(REVIEWS_TABLE).where({author});
    const results = await query;
    return results;
}
const fetchReviewsByReviewee = async(reviewee_id) => {
    const query = knex(REVIEWS_TABLE).where({reviewee_id});
    const results = await query;
    return results;
}
const fetchReviewsById = async(review_id) => {
    const query = knex(REVIEWS_TABLE).where({review_id});
    const results = await query;
    return results;
}
const fetchReviewsByRating = async(rating) => {
    const query = knex(REVIEWS_TABLE).where({rating});
    const results = await query;
    return results;
}
const updateComments = async(comments, review_id)=> {
    const query = knex(REVIEWS_TABLE).update({comments}).where({review_id});
    const results = await query;
    return results;
} 
const updateRating = async(rating, review_id) => {
    const query = knex(REVIEWS_TABLE).update({rating}).where({review_id});
    const results = await query;
    return results;
}
const createReview = async(author, comments, rating, reviewee_id) =>{
    const query = knex(REVIEWS_TABLE).insert({author, comments, rating, reviewee_id});
    const results = await query;
    return results;
}
const deleteReview = async(review_id) =>{
    const query = knex(REVIEWS_TABLE).delete().where({review_id});
    const results = await query;
    return results;
}

module.exports = {
    fetchAllReviews,
    fetchReviewsByAuthor,
    fetchReviewsByReviewee,
    fetchReviewsById,
    fetchReviewsByRating,
    updateComments,
    updateRating,
    createReview,
    deleteReview
}