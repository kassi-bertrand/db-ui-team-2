const express = require('express');
const User = require('../controllers/users');

const router = express.Router();

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

router.get('/session', async (req, res, next) => {
    try {
        const user = req.user;
        const result = await User.findUserByEmail(user.email);
        res.status(200).json(result);
        console.log(result);
    } catch (err) {
        console.error('No matching user: ', err);
        res.sendStatus(401).json({ message: err.toString() });
    }
}); 

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        console.log(req.models);
        const result = await req.models.user.createNewUser(body.email, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString()});
    }
    next();
});
module.exports = router;