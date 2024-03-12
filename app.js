'use strict';

//! Imports
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import morgan from 'morgan';

//! Variable d'env
const { NODE_ENV, PORT } = process.env;

//! Create Web API
// * Initialization
const app = express();

//* Middlewares
app.use(morgan(NODE_ENV === 'dev' ? 'dev' : 'tiny'));
app.use(express.json());

// TODO Routing

//* Launch Web API
app.listen(PORT, () => {
    console.log(`Web API is running on ${PORT} (${NODE_ENV})`);
})