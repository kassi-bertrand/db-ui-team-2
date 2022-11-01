const mysql = require('mysql');
require("dotenv").config();
const connectToDatabase = require('./db-helper');

const express = require('express');
const bodyParser = require ('body-parser');
const usersRoutes = require('./routes/users');
const sessionRoutes = require('./routes/session');
const registerRoutes = require('./routes/register');
const foodRoutes = require('./routes/food');
const performerRoutes = require('./routes/performer');
const venueRoutes = require('./routes/venue');

const { authenticateJWT, authenticateWithClaims } = require('./middleware/auth');
const { createModelsMiddleware } = require('./middleware/model-middleware');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(createModelsMiddleware);
app.get('/health', (request, response, next) => {
    const responseBody = {status: 'up', port};
    response.json(responseBody);
    next();
});

app.use('/session', sessionRoutes);
app.use('/users', authenticateJWT, usersRoutes);
app.use('/newUser', registerRoutes);
app.use('/food', foodRoutes);
app.use('/performer', performerRoutes);
app.use('/venue', venueRoutes);
app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});