const express = require('express');
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
       const venueByName = await req.models.venue.fetchVenuesByName(req.query.venue_name);
       res.json(venueByName);
       next();
   } if (req.query.venue_user) {
       const venueByUsername = await req.models.venue.fetchVenuesByUsername(req.query.venue_user);
       res.json(venueByUsername);
       next();
   } if (req.query.zip_code) {
      const venueByZipCode = await req.models.venue.fetchVenuesByZipCode(req.query.zip_code);
      res.json(venueByZipCode);
      next();
   } if (req.query.occasion) {
      const venueByOccasion = await req.models.venue.fetchVenuesByOccasion(req.query.occasion);
      res.json(venueByOccasion);
      next();
   } if (req.query.available) {
      const venueByAvailable = await req.models.venue.fetchVenuesByAvailable(req.query.available);
      res.json(venueByAvailable);
      next();
   } else {
       const allVenues = await req.models.venue.fetchAllVenues();
       res.json(allVenues);
       next();
   }
});
router.post('/', async (req, res, next) => {
    const createVenue = await req.models.venue.createVenue(req.body.venue_user, req.body.venue_name, req.body.street, req.body.city, req.body.state_initial, req.body.zip_code, req.body.cost, req.body.details, req.body.guest_capacity, req.body.occasion, req.body.available);
    res.status(201).json(createVenue);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updateVenue = await req.models.venue.updateVenue(req.body.venue_name, req.body.venue_user);
    res.json(updateVenue);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deleteVenue = await req.models.venue.deleteVenue(req.body.venue_user);
    res.status(204).end();
    next();
 });

module.exports = router;