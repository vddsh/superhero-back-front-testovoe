require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const cors = require('cors');
const superHeroes = require('./routes/index');

const connectDB = require('./db/connection');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/v1/superheroes', superHeroes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const start = async () => {
  try {
    await connectDB('mongodb://mongo:lKe1nHmTPUkGdQ1vJrI1@containers-us-west-83.railway.app:6107');
    app.listen(5500);
  } catch (e) {
    console.log(e);
  }
};

start();

