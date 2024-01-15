var express = require('express');
var router = express.Router();
let UserController = require('../controllers/userControllers')

/* GET home page. */


router.post('/users',UserController.login);



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
