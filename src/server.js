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
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

// START SERVER
server.listen(5500)