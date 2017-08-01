const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( '../views/index.html', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  let name = req.params.name;
  let list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, showForm: true, name: name} );
});

router.get('/twitter/:id', function(req, res) {
  let id = req.params.id;
  let list = tweetBank.find( {id: id} );
  console.log('id: ', id, "list: ", list)
  res.render( 'index', { tweets: list } );
});

router.post('/tweets', function(req, res){
  let name = req.body.name;
  let text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});




module.exports = router;