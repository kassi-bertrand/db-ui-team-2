/* This is importing the mysql package, the dotenv package, and the db-helper file. */
const mysql = require('mysql');
require("dotenv").config();
const connectToDatabase = require('./db-helper');

/* This is importing the express package, the body-parser package, and the routes files. */
const express = require('express');
const bodyParser = require ('body-parser');
const usersRoutes = require('./routes/users');
const sessionRoutes = require('./routes/session');
const registerRoutes = require('./routes/register');
const foodRoutes = require('./routes/food');
const performerRoutes = require('./routes/performer');
const venueRoutes = require('./routes/venue');
const reviewRoutes = require('./routes/reviews');
const formRoutes = require('./routes/hostForm');

const { authenticateJWT, authenticateWithClaims } = require('./middleware/auth');
const { createModelsMiddleware } = require('./middleware/model-middleware');

/* This is creating a new express app and setting the port to 8000. */
const app = express();
const port = 8000;

/* This is allowing the app to use the cors package. */
var cors = require('cors');
const { createPerformer } = require('./controllers/performer');
app.use(cors());

/* This is allowing the app to use the body-parser package and the createModelsMiddleware. */
app.use(bodyParser.json());
app.use(createModelsMiddleware);
/* This is a health check endpoint that will return a status of up and the port number. */
app.get('/health', (request, response, next) => {
    const responseBody = {status: 'up', port};
    response.json(responseBody);
    next();
});
/* This is telling the app to use the routes files. */
app.use('/session', sessionRoutes);
app.use('/users', authenticateJWT, usersRoutes);
app.use('/newUser', registerRoutes);
app.use('/catering', foodRoutes);
app.use('/performance', performerRoutes);
app.use('/venue', venueRoutes);
app.use('/reviews', reviewRoutes);
app.use('/events', formRoutes);
/* This is telling the app to listen on the port that was set above. */
app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});
