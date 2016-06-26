var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'three' });
});


module.exports = router;
