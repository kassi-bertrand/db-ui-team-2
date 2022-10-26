const express = require ('express');
const UserController = require('../controllers/users');
const router = express.Router();

outer.post('/new', async (req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await UserController.createUser(body.username, body.first_name, body.last_name, body.email, 
            body.phone_num, body.password);
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
})

module.exports = router;