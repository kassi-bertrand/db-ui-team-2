//routes created by Safwan Majeed
/* This is importing the express, hostForm, and knex modules. */
const express = require('express');
const Form = require('../controllers/hostForm');
const knex = require('../database/knex');
/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to students
*/
/* This is setting up the router to use the body parser. */
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

/* This is a route that is used to get the form information by the form number. */
router.get('/form_num', async (req, res, next) => {
   try {
      const form = req.query;
      const fetchInfo = await Form.fetchInfoByFormNum(form.form_num);
      res.status(201).json(fetchInfo[0]);
      next();
   }
   catch (err) {
      res.status(500).json({ message: err.toString()});
   }
   next();
});
/* This is a route that is used to get the form information by the user id. */
router.get('/:user_id', async (req, res, next) => {
   try {
      const form = req.params;
      const fetchInfo = await Form.fetchInfoByUserId(form.user_id);
      res.status(201).json(fetchInfo);
      next();
   }
   catch (err) {
      res.status(500).json({ message: err.toString()});
   }
   next();
});
/* This is a route that is used to get the form information by the filter type and the filter. */
router.get('/search/:Filter/:filtering', async (req, res, next) => {
      try {
         const filterType = req.params.Filter;
         const filter = req.params.filtering;
         var fetchInfo;
         if(filterType == "city"){
            fetchInfo = await Form.fetchInfoByCity(filter);
         }
         else if(filterType == "date"){
             fetchInfo = await Form.fetchInfoByDate(filter);
         }
         else if(filterType == "name"){ 
             fetchInfo = await Form.fetchInfoByName(filter);
         }
         res.status(201).json(fetchInfo);
         next();
      }
      catch (err) {
         res.status(500).json({ message: err.toString()});
      }
      next();
});
/* This is a route that is used to get the form information by the filter type and the filter. */
router.get('/all/filter', async (req, res, next) => {
   try {
      const availability = req.query.availability;
      const zip_code = req.query.zip_code;
      const dates1 = knex('food_details').where({availability}).andWhere({zip_code});
      const dates2 = knex('performer_details').where({availability}).andWhere({zip_code});
      const dates3 = knex('venue_details').where({availability}).andWhere({zip_code});
      const results1 = await dates1;
      const results2 = await dates2;
      const results3 = await dates3;
      arr = {"Catering" : results1, "Performance": results2, "Venue" : results3}
      res.status(201).json(arr);
   }
   catch (err) {
      res.status(500).json({ message: err.toString()});
   }
   next();
});
/* This is a route that is used to get the form information by the user id. */
router.get('/feed/:user_id', async (req, res, next) => {
   try {
      const form = req.params;
      const fetchInfo = await Form.fetchInfoWoCurrUser(form.user_id);
      res.status(201).json(fetchInfo);
      next();
   }
   catch (err) {
   }
   next();
});
/* This is a route that is used to create a new form. */
router.post('/new', async (req, res, next) => {
   try {
      const form = req.body;
      const createForm = await Form.createForm(form.user_id, form.name, form.phone_num, form.street, form.city, form.state, form.zip_code, form.event_date, form.budget, form.guest_count,form.occasion, form.details);
      const fetchInfo = await Form.fetchInfoByFormNum(createForm);
      res.status(201).json(fetchInfo[0]);
      next();
} catch (err) {
   console.error('Failed to create new form:', err);
   res.status(400).json({ message: err.toString() });
   next();
}
});
/* This is a route that is used to delete a form. */
router.delete('/delete', async (req, res, next) => {
   try {
      const form = req.body;
      const deleteForm = await Form.deleteForm(form.form_num);
      res.status(204).json({ message: "Success! Deleted!" }).end();
      next();
   }catch (err) {
      console.error('Failed to delete:', err);
      res.status(400).json({ message: err.toString() });
      next();
   }
 });
 
 module.exports = router;
