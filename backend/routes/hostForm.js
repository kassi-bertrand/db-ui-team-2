const express = require('express');
/**
* A router is a special Express object that can be used to define how to route and manage
* requests. We configure a router here to handle a few routes specific to students
*/
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/find', async (req, res, next) => {
   try {
       const fetchInfo = await req.models.form.fetchInfoByPhoneNum(req.body.PhoneNum);
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
       /*const allForm = await req.models.form.fetchAllForms();
       res.json(allForm);
       next();*/
       try {
         const result = await req.models.form.fetchAllForms();
         res.status(201).json(result);
     } catch (err) {
         //console.error('Failed to load current user:', err);
         res.status(500).json({ message: err.toString()});
     }
     next();
});
router.post('/add', async (req, res, next) => {
   try {
      //console.log(req.body.Location, req.body.Budget, req.body.Details, req.body.Name, req.body.PhoneNum, req.body.EventDate, req.body.GuestCount,req.body.Occasion);
      const createForm = await req.models.form.createForm(req.body.Location, req.body.Budget, req.body.Details, req.body.Name, req.body.PhoneNum, req.body.EventDate, req.body.GuestCount,req.body.Occasion);
      res.status(201).json(createForm);
      next();
} catch (err) {
   console.error('Failed to create new form:', err);
   res.status(400).json({ message: err.toString() });
   next();
}

 });
 /*router.put('/', async (req, res, next) => {
    const updateStudent = await req.models.student.updateStudent(req.body.name, req.body.id);
    res.json(updateStudent);
    next();
 });*/
 router.delete('/delete', async (req, res, next) => {
   try {
    const deleteForm = await req.models.form.deleteForm(req.body.PhoneNum);
    res.status(204).json({ message: "Success! Deleted!" }).end();
    next();
   }catch (err) {
      console.error('Failed to delete:', err);
      res.status(400).json({ message: err.toString() });
      next();
   }
   
 });
 module.exports = router;
