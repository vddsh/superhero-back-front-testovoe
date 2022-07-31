require('dotenv').config();
require('express-async-errors');


const express = require('express');
const app = express();
const cors = require('cors');
const superHeroes = require('./routes/index');

const {DIR ,MONGO_URL, PORT, SUPER_HEROES_API} = require('./urls/data')

const connectDB = require('./db/connection');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(`/${DIR}`, express.static(DIR));
app.use(SUPER_HEROES_API, superHeroes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const start = async () => {
  try {
    await connectDB(MONGO_URL);
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
};

start();

