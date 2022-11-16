const express = require('express');
/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to performers
*/
const Performer = require('../controllers/performer');

const router = express.Router();
// Note: we don't specify `/performers`, just `/`. The association to `/performers` happens
// in the root index.js file
const bodyParser = require('body-parser');
router.use(bodyParser.json());

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
router.post('/', async (req, res, next) => {
    const createPerformer = await Performer.createPerformer(req.body.p_user, req.body.performer_name, req.body.details, req.body.num_performers, req.body.available, req.body.start_date
        ,req.body.end_date);
    res.status(201).json(createPerformer);
    next();
 });
 router.put('/booked', async (req, res, next) => {
    const updateDateBooked = await Performer.updateDateBooked(req.body.Booked, req.body.p_user);
    res.json(updateDateBooked);
    next();
  });
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
 router.delete('/', async (req, res, next) => {
    const deletePerformer = await Performer.deletePerformer(req.body.username);
    res.status(204).end();
    next();
 });

module.exports = router;