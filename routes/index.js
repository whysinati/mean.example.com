var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'Express Page', name:'Christa'});
});
router.get('/logout', function(req, res){
  console.log(req.session);
  req.logout();
  console.log(req.session);
});

module.exports = router;
