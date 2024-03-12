'use strict';

//! Imports
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import expressJSDocSwagger from 'express-jsdoc-swagger';
import swaggerOption from './swagger.option.js';

import morgan from 'morgan';
import mainRouter from './routes/index.js';

//! Variable d'env
const { NODE_ENV, PORT } = process.env;

//! Create Web API
// * Initialization
const app = express();

//* Add swagger
expressJSDocSwagger(app)(swaggerOption);

//* Middlewares
app.use(morgan(NODE_ENV === 'dev' ? 'dev' : 'tiny'));
app.use(express.json());

//* Routing
app.use('/api', mainRouter);

//* Launch Web API
app.listen(PORT, () => {
    console.log(`Web API is running on ${PORT} (${NODE_ENV})`);
});