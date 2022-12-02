/* This is importing the modules that we need to use in our app. */
const express = require('express');
const bodyParser = require ('body-parser');
const usersRoutes = require('./routes/users');
const sessionRoutes = require('./routes/session');
const registerRoutes = require('./routes/register');
const hostFormRoutes = require('./routes/hostForm');
const { authenticateJWT, authenticateWithClaims } = require('./middleware/auth');
const { createModelsMiddleware } = require('./middleware/model-middleware');

/* This is creating a new express app and setting the port to 3306. */
const app = express();
const port = 3306;
/* This is importing the modules that we need to use in our app. */
app.use(bodyParser.json());
app.use(createModelsMiddleware);
/* This is a health check endpoint that will return a status of up and the port number. */
app.get('/health', (request, response, next) => {
    const responseBody = {status: 'up', port};
    response.json(responseBody);
    next();
});

/* This is telling the app to use the routes that we have created in the routes folder. */
app.use('/session', sessionRoutes);
app.use('/students', authenticateJWT, usersRoutes);
app.use('/register', registerRoutes);
app.use('/form', hostFormRoutes);
app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});