const express = require('express');
const Form = require('../controllers/hostForm');
const knex = require('../database/knex');
/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to students
*/
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/form_num', async (req, res, next) => {
   try {
      const form = req.query;
      const fetchInfo = await Form.fetchInfoByPhoneNum(form.form_num);
      
      console.log(fetchInfo[0]);
      res.status(201).json(fetchInfo[0]);
      next();
   }
   catch (err) {
      //console.error('Failed to load current user:', err);
      res.status(500).json({ message: err.toString()});
   }
   next();
});
router.get('/:user_id', async (req, res, next) => {
   try {
      const form = req.params;
      const fetchInfo = await Form.fetchInfoByUserId(form.user_id);
      console.log(form.user_id);
      console.log(fetchInfo);
      res.status(201).json(fetchInfo);
      next();
   }
   catch (err) {
      //console.error('Failed to load current user:', err);
      res.status(500).json({ message: err.toString()});
   }
   next();
});
router.get('/search/:Filter/:filtering', async (req, res, next) => {
      try {
         //const form = req.params;
         const filterType = req.params.Filter;
         const filter = req.params.filtering;
         console.log(filter);
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
         //console.log(form.user_id);
         console.log(fetchInfo);
         res.status(201).json(fetchInfo);
         next();
      }
      catch (err) {
         //console.error('Failed to load current user:', err);
         res.status(500).json({ message: err.toString()});
      }
      next();
});
router.get('/venue/filter', async (req, res, next) => {
   try {
      const availability = req.query.availability;
      const zip_code = req.query.zip_code;
      const dates = knex('venue_details').where({availability}).andWhere({zip_code});
      const results = await dates;
      res.status(201).json(results);
   }
   catch (err) {
      //console.error('Failed to load current user:', err);
      res.status(500).json({ message: err.toString()});
   }
   next();
});
router.get('/food/filter', async (req, res, next) => {
   try {
      const availability = req.query.availability;
      const zip_code = req.query.zip_code;
      const dates = knex('food_details').where({availability}).andWhere({zip_code});
      const results = await dates;
      res.status(201).json(results);
   }
   catch (err) {
      //console.error('Failed to load current user:', err);
      res.status(500).json({ message: err.toString()});
   }
   next();
});
router.get('/performance/filter', async (req, res, next) => {
   try {
      const availability = req.query.availability;
      const zip_code = req.query.zip_code;
      const dates = knex('performer_details').where({availability}).andWhere({zip_code});
      const results = await dates;
      res.status(201).json(results);
   }
   catch (err) {
      //console.error('Failed to load current user:', err);
      res.status(500).json({ message: err.toString()});
   }
   next();
});

router.get('/feed/:user_id', async (req, res, next) => {
   try {
      const form = req.params;
      const fetchInfo = await Form.fetchInfoWoCurrUser(form.user_id);
      console.log(form.user_id);
      console.log(fetchInfo);
      res.status(201).json(fetchInfo);
      next();
   }
   catch (err) {
      //console.error('Failed to load current user:', err);
      //res.status(500).json({ message: err.toString()});
   }
   next();
});
router.post('/new', async (req, res, next) => {
   try {
      const form = req.body;
      //console.log(req.body.Location, req.body.Budget, req.body.Details, req.body.Name, req.body.PhoneNum, req.body.EventDate, req.body.GuestCount,req.body.Occasion);
      const createForm = await Form.createForm(form.user_id, form.name, form.phone_num, form.street, form.city, form.state, form.zip_code, form.event_date, form.budget, form.guest_count,form.occasion, form.details);
      //res.status(201).json(createForm);
      //const form = req.body;
      const fetchInfo = await Form.fetchInfoByPhoneNum(createForm);
      //console.log(fetchInfo)
      res.status(201).json(fetchInfo[0]);
      next();
} catch (err) {
   console.error('Failed to create new form:', err);
   res.status(400).json({ message: err.toString() });
   next();
}

 });
 
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
