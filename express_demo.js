const config = require('config');
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

dotenv.config();

const logger = require('./logger');
const router = require('./Router/practice');
const app = express();
const log = require('./logger');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));
app.use('/api/practices', router);

// // configuration practice
// console.log('Application name: ' + config.get('name'));
// console.log('Mail Server: ' + config.get('mail.host'));
// console.log('Mail password: ' + config.get('mail.passwrod'));

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`); 
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...!'); 
}

// In case of module type js we import packages by:
// import express form "express";
// import path from "path";
const port = process.env.PORT || 8000; //environment variable declaration with process object
app.listen(port, () => {
   console.log(`Listening on port ${port}!!`); 
});













// app.put();
// app.delete();


