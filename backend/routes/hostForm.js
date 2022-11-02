const express = require('express');
const Form = require('../controllers/hostForm');

/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to students
*/
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/find', async (req, res, next) => {
   try {
      const form = req.body;
      const fetchInfo = await Form.fetchInfoByPhoneNum(form.PhoneNum);
      res.status(201).json(fetchInfo);
      next();
   }
   catch (err) {
      //console.error('Failed to load current user:', err);
      res.status(500).json({ message: err.toString()});
   }
   next();
});
router.get('/all', async (req, res, next) => {

       try {
         const result = await Form.fetchAllForms();
         res.status(201).json(result);
     } catch (err) {
         //console.error('Failed to load current user:', err);
         res.status(500).json({ message: err.toString()});
     }
     next();
});
router.post('/add', async (req, res, next) => {
   try {
      const form = req.body;
      const createForm = await Form.createForm(form.Location, form.Budget, form.Details, form.Name, form.PhoneNum, form.EventDate, form.GuestCount,form.Occasion);
      res.status(201).json(createForm);
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
      const deleteForm = await Form.deleteForm(form.PhoneNum);
      res.status(204).json({ message: "Success! Deleted!" }).end();
      next();
   }catch (err) {
      console.error('Failed to delete:', err);
      res.status(400).json({ message: err.toString() });
      next();
   }
   
 });
 
 module.exports = router;
