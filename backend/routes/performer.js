//routes created by Karina Shin and Safwan Majeed
/* This is importing the express module. */
const express = require('express');
/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to performers
*/
/* This is importing the performer controller and the express router. */
const Performer = require('../controllers/performer');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

/* This is a get request that is getting all the performers from the database. */
router.get('/', async (req, res, next) => {
   if (req.query.username) {
       const performerByName = await Performer.fetchPerformersByName(req.query.username);
       res.json(performerByName);
       next();
   } if (req.query.available) {
       const performerByAvailable = await Performer.fetchAllPerformersByAvailable(req.query.available);
       res.json(performerByAvailable);
       next();
   } else {
       const allPerformers = await Performer.fetchAllPerformers();
       res.json(allPerformers);
       next();
   }
});
/* This is a get request that is getting all the performers from the database. */
router.get('/:user_id', async (req, res, next) => {
    try {
       const form = req.params;
       const fetchInfo = await Performer.fetchPerformersByUserID(form.user_id);
       res.status(201).json(fetchInfo);
       next();
    }
    catch (err) {
       res.status(500).json({ message: err.toString()});
    }
    next();
 });
/* This is a post request that is creating a new performer in the database. */
router.post('/new', async (req, res, next) => {
    const createPerformer = await Performer.createPerformer(req.body.user_id, req.body.name, req.body.phone_num, req.body.zip_code, req.body.availability, req.body.details);
    const PerformerID = await Performer.fetchPerformerByServID(createPerformer);
    res.status(201).json(PerformerID[0]);
    next();
 });
 /* This is a put request that is updating the rating of a performer in the database. */
 router.put('/rating', async (req, res, next) => {
    const rating = await Performer.ratePerformer(req.body.performer_num, req.body.rate);
    const foodByUsername = await Performer.fetchPerformerByServID(req.body.performer_num);
    res.status(201).json(foodByUsername[0]);
    next();
 });
 /* This is a put request that is updating the date booked of a performer in the database. */
 router.put('/booked', async (req, res, next) => {
    const updateDateBooked = await Performer.updateDateBooked(req.body.Booked, req.body.p_user);
    res.json(updateDateBooked);
    next();
  });
/* This is a put request that is updating the performer in the database. */
router.put('/', async (req, res, next) => {
    if (req.body.performer_name) {
        const updatePerformerName = await Performer.updatePerformerName(req.body.performer_name, req.body.p_user);
        res.json(updatePerformerName);
        next();
    } if (req.body.details) {
        const updatePerformerDetails = await Performer.updatePerformerDetails(req.body.details, req.body.p_user);
        res.json(updatePerformerDetails);
        next();
    } if (req.body.num_performers) {
        const updateNumPerformers = await Food.updateNumPerformers(req.body.num_performers, req.body.p_user);
        res.json(updateNumPerformers);
        next();
    } if (req.body.available) {
        const updatePerformerAvailability = await Food.updatePerformerAvailability(req.body.available, req.body.p_user);
        res.json(updatePerformerAvailability);
        next();
    }
});
 /* This is a delete request that is deleting a performer from the database. */
 router.delete('/', async (req, res, next) => {
    const deletePerformer = await Performer.deletePerformer(req.body.username);
    res.status(204).end();
    next();
 });

module.exports = router;