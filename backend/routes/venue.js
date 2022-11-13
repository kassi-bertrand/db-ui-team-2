const express = require('express');
const Venue = require('../controllers/venue');

/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to venues
*/
const router = express.Router();
// Note: we don't specify `/venues`, just `/`. The association to `/venues` happens
// in the root index.js file
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', async (req, res, next) => {
   if (req.query.venue_name) {
       const venueByName = await Venue.fetchVenuesByName(req.query.venue_name);
       res.json(venueByName);
       next();
   } if (req.query.venue_user) {
       const venueByUsername = await Venue.fetchVenuesByUsername(req.query.venue_user);
       res.json(venueByUsername);
       next(); 
   } if (req.query.zip_code) {
      const venueByZipCode = await Venue.fetchVenuesByZipCode(req.query.zip_code);
      res.json(venueByZipCode);
      next();
   } if (req.query.occasion) {
      const venueByOccasion = await Venue.fetchVenuesByOccasion(req.query.occasion);
      res.json(venueByOccasion);
      next();
   } if (req.query.available) {
      const venueByAvailable = await Venue.fetchVenuesByAvailable(req.query.available);
      res.json(venueByAvailable);
      next();
   } else {
       const allVenues = await Venue.fetchAllVenues();
       res.json(allVenues);
       next();
   }
});
router.post('/', async (req, res, next) => {
    const createVenue = await Venue.createVenue(req.body.venue_user, req.body.venue_name, req.body.street, req.body.city, req.body.state_initial, req.body.zip_code, req.body.cost, req.body.details, req.body.guest_capacity, req.body.occasion, req.body.available);
    res.status(201).json(createVenue);
    next();
 });
 router.put('/', async (req, res, next) => {
   if (req.body.venue_name) {
      const updateVenueName = await Venue.updateVenueName(req.body.venue_name, req.body.venue_user);
      res.json(updateVenueName);
      next();
   } if (req.body.cost) {
      const updateVenueCost = await Venue.updateVenueCost(req.body.cost, req.body.venue_user);
      res.json(updateVenueCost);
      next();
   } if (req.body.occasion) {
      const updateOccassion = await Venue.updateOccassion(req.body.occasion, req.body.venue_user);
      res.json(updateOccassion);
      next();
   } if (req.body.details) {
      const updateVenueDetails = await Venue.updateVenueDetails(req.body.details, req.body.venue_user);
      res.json(updateVenueDetails);
      next();
   } if (req.body.guest_capacity) {
      const updateVenueCapacity = await Venue.updateVenueCapacity(req.body.guest_capacity, req.body.venue_user);
      res.json(updateVenueCapacity);
      next();
   } if (req.body.available) {
      const updateVenueAvailability = await Venue.updateVenueAvailability(req.body.available, req.body.venue_user);
      res.json(updateVenueAvailability);
      next();
   } if (req.body.street, req.body.city, req.body.state_initial, req.body.zip_code) {
      const updateVenueAddress = await Venue.updateVenueAddress(req.body.street, req.body.city, req.body.state_initial, req.body.zip_code, req.body.food_user);
      res.json(updateVenueAddress);
      next();
   }
 });
 router.delete('/', async (req, res, next) => {
    const deleteVenue = await Venue.deleteVenue(req.body.venue_user);
    res.status(204).end();
    next();
 });

module.exports = router;