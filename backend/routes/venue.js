//routes created by Karina Shin and Safwan Majeed
const express = require('express');
const Venue = require('../controllers/venue');
const Performer = require('../controllers/performer');

/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to venues
*/
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

/* This is a get request that is getting all the venues from the database. */
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
/* This is a post request that is creating a new venue in the database. */
router.post('/new', async (req, res, next) => {
    const createVenue = await Venue.createVenue(req.body.user_id, req.body.name, req.body.phone_num, req.body.street, req.body.city, req.body.state_initial, req.body.availability, req.body.zip_code, req.body.cost, req.body.guest_capacity, req.body.details);
    const VenueID = await Venue.fetchVenuesByServID(createVenue);
    res.status(201).json(VenueID[0]);
    next();
 });
 /* This is a get request that is getting all the venues from the database. */
 router.get('/:user_id', async (req, res, next) => {
   try {
      const form = req.params;
      const fetchInfo = await Venue.fetchVenuesByUserID(form.user_id);
      res.status(201).json(fetchInfo);
      next();
   }
   catch (err) {
      res.status(500).json({ message: err.toString()});
   }
   next();
});
 /* This is a put request that is updating the rating of a venue in the database. */
 router.put('/rating', async (req, res, next) => {
   const rating = await Venue.rateVenue(req.body.venue_num, req.body.rate);
   const VenueID = await Performer.fetchVenuesByServID(req.body.venue_num);
   res.status(201).json(VenueID[0]);
   next();
});
 /* This is a put request that is updating the venue in the database. */
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
 /* This is a put request that is updating the date booked of a venue in the database. */
 router.put('/booked', async (req, res, next) => {
   const updateDateBooked = await Venue.updateDateBooked(req.body.Booked, req.body.venue_user);
   res.json(updateDateBooked);
   next();
 });
 /* This is a delete request that is deleting a venue from the database. */
 router.delete('/', async (req, res, next) => {
    const deleteVenue = await Venue.deleteVenue(req.body.venue_user);
    res.status(204).end();
    next();
 });

module.exports = router;