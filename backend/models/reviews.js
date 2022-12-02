//models made by Karina Shin
const knex = require('../database/knex');
const REVIEWS_TABLE = 'reviews';

/**
 * It returns a promise that resolves to an array of all the reviews in the database
 * @returns An array of objects
 */
const fetchAllReviews = async() => {
    const query = knex(REVIEWS_TABLE);
    const results = await query;
    return results;
}
/**
 * Fetch all reviews by a given author.
 * @param author - The author of the review.
 * @returns An array of objects
 */
const fetchReviewsByAuthor = async(author) => {
    const query = knex(REVIEWS_TABLE).where({author});
    const results = await query;
    return results;
}
/**
 * Fetch all reviews for a given reviewee.
 * @param reviewee_id - the id of the user who is being reviewed
 * @returns An array of objects
 */
const fetchReviewsByReviewee = async(reviewee_id) => {
    const query = knex(REVIEWS_TABLE).where({reviewee_id});
    const results = await query;
    return results;
}
/**
 * It returns the review with the given review_id
 * @param review_id - The id of the review you want to fetch.
 * @returns An array of objects
 */
const fetchReviewsById = async(review_id) => {
    const query = knex(REVIEWS_TABLE).where({review_id});
    const results = await query;
    return results;
}
/**
 * Fetch all reviews with a given rating.
 * @param rating - The rating of the review.
 * @returns An array of objects
 */
const fetchReviewsByRating = async(rating) => {
    const query = knex(REVIEWS_TABLE).where({rating});
    const results = await query;
    return results;
}
/**
 * It updates the comments of a review.
 * @param comments - the new comments to be updated
 * @param review_id - the id of the review you want to update
 * @returns The number of rows affected.
 */
const updateComments = async(comments, review_id)=> {
    const query = knex(REVIEWS_TABLE).update({comments}).where({review_id});
    const results = await query;
    return results;
} 
/**
 * This function updates the rating of a review in the database
 * @param rating - the new rating to be updated
 * @param review_id - the id of the review you want to update
 * @returns The number of rows affected.
 */
const updateRating = async(rating, review_id) => {
    const query = knex(REVIEWS_TABLE).update({rating}).where({review_id});
    const results = await query;
    return results;
}
/**
 * This function creates a new review in the database
 * @param author - the name of the person who wrote the review
 * @param comments - string
 * @param rating - number
 * @param reviewee_id - the id of the user who is being reviewed
 * @returns The results of the query.
 */
const createReview = async(author, comments, rating, reviewee_id) =>{
    const query = knex(REVIEWS_TABLE).insert({author, comments, rating, reviewee_id});
    const results = await query;
    return results;
}
/**
 * This function deletes a review from the database
 * @param review_id - The id of the review you want to delete.
 * @returns The results of the query.
 */
const deleteReview = async(review_id) =>{
    const query = knex(REVIEWS_TABLE).delete().where({review_id});
    const results = await query;
    return results;
}

/* Exporting the functions in the file so that they can be used in other files. */
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