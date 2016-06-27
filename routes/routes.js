var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'three' });
});

router.get('/cubes', function(req, res) {
  res.render('cubes', { title: 'three' });
});

module.exports = router;
