/**
 * Author: Christophe DUFOUR
 * Context: Formation Aston - CDNT12 - Architecture
 */

const express = require('express');
const md5 = require('md5');
const app = express();
const port = 3001;

var users = require('./users.json');

// json body parsing middleware
app.use(express.json())

// cors middleware
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', '*');
  next();
})

app.get('/users', (req, res) => res.json(users))

app.post('/creds', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({token: null, message: 'DATA_MISSING'})
  }

  var searchedIndex = -1;

  users.forEach((user, index) => {
    if (user.email == email && user.password == password) {
      searchedIndex = index;
    }
  })

  if (searchedIndex === -1) return res.json({token: null, message: 'AUTH_FAILED'});

  var token = md5(new Date());

  users[searchedIndex].token = token;
  
  res.send({token, message: 'AUTH_SUCCEEDED'})
})

app.post('/token', (req, res) => {
  const { token } = req.body;

  var foundToken = false;

  if (!token) return res.json({foundToken});

  users.forEach(user => {
    if (user.token === token) foundToken = true;
  })

  return res.json({foundToken})
})

app.listen(port, () => {
  console.log('Service Token running on ' + port);
})