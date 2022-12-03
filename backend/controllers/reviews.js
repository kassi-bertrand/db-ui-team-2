const Review = require('../models/reviews');

/**
 * It fetches all reviews from the database and returns the result
 * @returns An array of objects
 */
const fetchAllReviews = async() => {
    const result = await Review.fetchAllReviews();
    return result;
}
/**
 * It fetches reviews by author
 * @param author - The author of the review.
 * @returns An array of objects
 */
const fetchReviewsByAuthor = async(author) => {
    const result = await Review.fetchReviewsByAuthor(author);
    return result;
}
/**
 * It fetches all reviews for a given reviewee
 * @param reviewee_id - the id of the user who is being reviewed
 * @returns An array of objects
 */
const fetchReviewsByReviewee = async(reviewee_id) => {
    const result = await Review.fetchReviewsByReviewee(reviewee_id);
    return result;
}
/**
 * It fetches reviews by id
 * @param review_id - The id of the review you want to fetch.
 * @returns The result of the query.
 */
const fetchReviewsById = async(review_id) => {
    const result = await Review.fetchReviewsById(review_id);
    return result;
}
/**
 * It fetches reviews by rating from the database
 * @param rating - The rating of the review.
 * @returns An array of objects
 */
const fetchReviewsByRating = async(rating) => {
    const result = await Review.fetchReviewsByRating(rating);
    return result;
}
/**
 * This function updates the comments of a review
 * @param comments - an array of comments
 * @param review_id - the id of the review you want to update
 * @returns The result of the updateComments function.
 */
const updateComments = async(comments, review_id) => {
    const result = await Review.updateComments(comments, review_id);
    return result;
} 
/**
 * This function updates the rating of a review in the database
 * @param rating - the new rating to be updated
 * @param review_id - the id of the review you want to update
 * @returns The result of the updateRating function.
 */
const updateRating = async(rating, review_id) => {
    const result = await Review.updateRating(rating, review_id);
    return result;
}
/**
 * This function creates a review for a user
 * @param author - the user who is writing the review
 * @param comments - String
 * @param rating - integer
 * @param reviewee_id - the id of the user who is being reviewed
 * @returns The result of the query.
 */
const createReview = async(author, comments, rating, reviewee_id) =>{
    const result = await Review.createReview(author, comments, rating, reviewee_id);
    return result;
}
/**
 * This function deletes a review from the database
 * @param review_id - The id of the review you want to delete.
 * @returns The result of the deleteReview function.
 */
const deleteReview = async(review_id) => {
    const result = await Review.deleteReview(review_id);
    return result;
}

/* Exporting the functions from the file. */
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