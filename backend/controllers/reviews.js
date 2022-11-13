const Review = require('../models/reviews');

const fetchAllReviews = async() => {
    const result = await Review.fetchAllReviews();
    return result;
}
const fetchReviewsByAuthor = async(author) => {
    const result = await Review.fetchReviewsByAuthor(author);
    return result;
}
const fetchReviewsByReviewee = async(reviewee_id) => {
    const result = await Review.fetchReviewsByReviewee(reviewee_id);
    return result;
}
const fetchReviewsById = async(review_id) => {
    const result = await Review.fetchReviewsById(review_id);
    return result;
}
const fetchReviewsByRating = async(rating) => {
    const result = await Review.fetchReviewsByRating(rating);
    return result;
}
const updateComments = async(comments, review_id) => {
    const result = await Review.updateComments(comments, review_id);
    return result;
} 
const updateRating = async(rating, review_id) => {
    const result = await Review.updateRating(rating, review_id);
    return result;
}
const createReview = async(author, comments, rating, reviewee_id) =>{
    const result = await Review.createReview(author, comments, rating, reviewee_id);
    return result;
}
const deleteReview = async(review_id) => {
    const result = await Review.deleteReview(review_id);
    return result;
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