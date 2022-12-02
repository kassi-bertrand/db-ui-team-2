//routes created by Kate Bouis
const express = require('express');
const User = require('../controllers/users');

const router = express.Router();

/* This is a route that is used to get all users. */
router.get('/', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.fetchAllUsers();
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to get all users ', err);
        res.status(500).json({ message: err.toString()});
    }
 });

/* This is a route that is used to get the current user. */
router.get('/current', async(req, res, next) => {
    try {
        const user = req.user;
        const result = await User.findUserByEmail(user.email);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to load current user:', err);
        res.status(500).json({ message: err.toString()});
    }
});

/* This is a route that is used to get the current user. */
router.get('/session', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.findUserByEmail(user.email);
        res.status(200).json(result);
    } catch (err) {
        console.error('No matching user: ', err);
        res.sendStatus(401).json({ message: err.toString() });
    }
}); 

/* This is a route that is used to create a new user. */
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await req.models.user.createNewUser(body.name, body.phone_num, body.email, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString()});
    }
    next();
});
module.exports = router;