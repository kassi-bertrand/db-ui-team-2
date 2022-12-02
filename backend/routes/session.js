//routes created by Kate Bouis
const express = require('express');
const UserController = require('../controllers/users');
const router = express.Router();

/* This is the route that is called when a user tries to log in. It takes the email and password from the request body and
passes them to the authenticateUser function in the UserController. If the user is authenticated, it returns a 201
status code and the user object. If the user is not authenticated, it returns a 500 status code and an error message. */
router.post('/', async(req, res, next) => {
    try {
        const body = req.body;
        
        const result = await UserController.authenticateUser(body.email, body.password);
        res.status(201).json(result);
    } catch(err) {
        console.error('Failed to authenticate user:', err);
        res.status(500).json({message: err.toString()});
    }
    next();
})

module.exports = router;