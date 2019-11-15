'use strict';
var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");

require('dotenv').config()
const PORT = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname })
});

// app.get('/', getPortfolio);

app.get('/cool', (request, response) => {
  response.send('cool data from the /cool route');
});

// function getPortfolio(req, res) {
//   res.render('index.html');
// }

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
