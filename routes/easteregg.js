var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({message: 'Bu uygulama oorbs.studiodan ananizin amina armagan olsun'});
});

module.exports = router;
