var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/asd', function(req, res, next) {
  res.json('asdasd');
});

module.exports = router;
