const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.static(__dirname + '/../client/dist'));

app.listen(9000, function() {
  console.log('Server started and listening on port 9000');
});

app.get('/api/cows', () => {});

app.post('/api/cows', () => {});