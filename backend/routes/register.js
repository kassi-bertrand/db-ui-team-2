//routes created by Kate Bouis
/* This is importing the express module and the user controller module. */
const express = require ('express');
const UserController = require('../controllers/users');
const router = express.Router();

/* This is a post request that is being sent to the server. It is sending the information from the form to the server. */
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await UserController.createUser(body.name, body.phone_num, body.email, body.password);
        if(result.size === 0){
            console.error('Failed to create new user:', err);
            res.status(400).json({ message: err.toString() });
        } else {
            res.status(201).json(result);
        }
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(400).json({ message: err.toString() });
    }
    next();
});

module.exports = router;