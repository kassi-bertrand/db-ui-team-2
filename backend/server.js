const mysql = require('mysql');
require("dotenv").config();
const connectToDatabase = require('./db-helper');

const express = require('express');
const bodyParser = require ('body-parser');
const usersRoutes = require('./routes/users');
const sessionRoutes = require('./routes/session');
const registerRoutes = require('./routes/register');
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
app.use('/register', registerRoutes);
app.listen(port, () => {
    console.log(`This app is listening on port ${port}`);
});

app.get('/users', async (request, response) => {
  try {
      console.log('Initiating GET /users request');
      console.log('Request query arguments is an object containing:', request.query);
      const name = request.query.name;
      const { DBQuery, disconnect } = await connectToDatabase();
      let results;
      if (name) {
          results = await DBQuery('SELECT * FROM user WHERE email = ?', [email]);
      } else {
          results = await DBQuery('SELECT * FROM user');
      }
      disconnect();
      response.json(results);
  } catch (err) {
      console.error('There was an error in GET /users', err);
      response.status(500).json({ message: err.message });
  }
});

app.post('/users', async (request, response) => {
  try {
      console.log('Initiating POST /users request');
      console.log('Request has a body / payload containing:', request.body);
      const payload = request.body; // This payload should be an object containing student data
      const { DBQuery, disconnect } = await connectToDatabase();
      const results = await DBQuery('INSERT INTO user(email) VALUES (?)', [payload.email]);
      console.log('Results of my INSERT statement:', results);
     
      // the results object contains an insertId, which tells us what the ID is of the newly
      // created record. Let's load that record now and pull the full object to provide a
      // good response body
      const newlyCreatedRecord = await DBQuery('SELECT * FROM user WHERE id = ?', [results.insertId]);
      disconnect();
      response.status(201).json(newlyCreatedRecord); // 201 status = resource created
  } catch (err) {
      console.error('There was an error in POST /users', err);
      response.status(500).json({ message: err.message });
  }
});

app.put('/users', async (request, response) => {
  try {
      console.log('Initiating PUT /users request');
      console.log('Request has a body / payload containing:', request.body);
      console.log('Request has params containing:', request.query);
    
      const payload = request.body; // This payload should be an object containing update student data
      const id = request.query.id; // And pull the ID from the request params
      const { DBQuery, disconnect } = await connectToDatabase();
      const results = await DBQuery('UPDATE student SET name = ? WHERE id = ?', [payload.email, id]);
      console.log('Results of my UPDATE statement:', results);
    
      // Since we already know the id we're looking for, let's load the most up to date data
      const newlyCreatedRecord = await DBQuery('SELECT * FROM user WHERE id = ?', [id]);
      disconnect();
      response.json(newlyCreatedRecord);
  } catch (err) {
      console.error('There was an error in PUT /users', err);
      response.status(500).json({ message: err.message });
  }
});

app.delete('/users', async (request, response) => {
  try {
      console.log('Initiating USERS /students request' );
      console.log('Request has params containing:' , request.query);
     
      const id = request.query.id;
      const { DBQuery, disconnect } = await connectToDatabase ();
      const results = await DBQuery('DELETE FROM user WHERE id = ?' , [id]);
      console.log('Results of my UPDATE statement:' , results);
     
      disconnect();
      response.status(204).end(); // End the request with a 204 status and no response body
  } catch (err) {
      console.error('There was an error in DELETE /users' , err);
      response.status(500).json({ message: err.message });
  }
});