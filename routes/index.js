var express = require('express');
var router = express.Router();

let name = "Emerald Bricker";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: name });
});

module.exports = router;
