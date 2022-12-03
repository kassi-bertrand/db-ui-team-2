//routes created by Karina Shin
const express = require('express');
/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to foods
*/
const Review = require('../controllers/reviews');

const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

/* This is a get request that will return all reviews, or reviews by author, reviewee, review id, or rating. */
router.get('/', async (req, res, next) => {
   if (req.query.author) {
       const reviewByAuthor = await Review.fetchReviewsByAuthor(req.query.author);
       res.json(reviewByAuthor);
       next();
   } if (req.query.reviewee_id) {
       const reviewByReviewee = await Review.fetchReviewsByReviewee(req.query.reviewee_id);
       res.json(reviewByReviewee);
       next();
   } if (req.query.review_id) {
       const reviewsById = await Review.fetchReviewsById(req.query.review_id);
       res.json(reviewsById);
       next();
   } if (req.query.rating) {
       const reviewByRating = await Review.fetchReviewsByrating(req.query.rating);
       res.json(reviewByRating);
       next();
   } else {
       const allReviews = await Review.fetchAllReviews();
       res.json(allReviews);
       next();
   }
});
/* This is a post request that will create a new review. */
router.post('/', async (req, res, next) => {
    const createReview = await Review.createReview(req.body.author, req.body.comments, req.body.rating, req.body.reviewee_id);
    res.status(201).json(createReview);
    next();
 });
 /* This is a put request that will update the comments or rating of a review. */
 router.put('/', async (req, res, next) => {
    if (req.body.comments) {
        const updateComments = await Review.updateComments(req.body.comments, req.body.review_id);
        res.json(updateComments);
        next();
    } if (req.body.rating) {
        const updateRating = await Review.updateRating(req.body.rating, req.body.review_id);
        res.json(updateRating);
        next();
    }
 }); 
 /* This is a delete request that will delete a review. */
 router.delete('/', async (req, res, next) => {
    const deleteReview = await Review.deleteReview(req.body.review_id);
    res.status(204).end();
    next();
 });

module.exports = router;