const express = require('express');
/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to performers
*/
const router = express.Router();
// Note: we don't specify `/performers`, just `/`. The association to `/performers` happens
// in the root index.js file
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', async (req, res, next) => {
   if (req.query.username) {
       const performerByName = await req.models.performer.fetchPerformersByName(req.query.username);
       res.json(performerByName);
       next();
   } if (req.query.available) {
       const performerByAvailable = await req.models.performer.fetchAllPerformersByAvailable(req.query.available);
       res.json(performerByAvailable);
       next();
   } else {
       const allPerformers = await req.models.performer.fetchAllPerformers();
       res.json(allPerformers);
       next();
   }
});
router.post('/', async (req, res, next) => {
    const createPerformer = await req.models.performer.createPerformer(req.body.username, req.body.username, req.body.performer_name, req.body.details, req.body.num_performers, req.body.available);
    res.status(201).json(createPerformer);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updatePerformer = await req.models.performer.updatePerformer(req.body.performer_name);
    res.json(updatePerformer);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deletePerformer = await req.models.performer.deletePerformer(req.body.username);
    res.status(204).end();
    next();
 });

module.exports = router;