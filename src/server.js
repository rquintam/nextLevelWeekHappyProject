const express = require('express');
const path = require('path');
const pages = require('./pages.js');
const server = express();


server
  // USE BODY FROM REQ
  .use(express.urlencoded({ extended: true }))

  // USING STATIC FILES
  .use(express.static('public'))

  // SETUP TEMPLATE ENGINE
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  // CREATE APP ROUTES
  .get('/', pages.index)
  .get('/institution', pages.institution)
  .get('/institutions', pages.institutions)
  .get('/create-institution', pages.createinstitution)
  .post('/save-institution', pages.saveInstitution)

// START SERVER
server.listen(5500)