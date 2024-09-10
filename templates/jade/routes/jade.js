var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('tutorial', { title: 'Jade Templates',
    youAreUsingJade:true
   });
});
 router.get('/atributes',function(req , res, next){
  res.render('atributes',{title:' Jade atributes',
  authenticated:true
});
 });
 router.get('/Conditionals',function(req , res, next){
  res.render('Conditionals',{title:' Jade Conditionals'});
 });

 router.get('/extends', function(req, res, next) {
  res.render('extends');
});
router.get('/Includes', function(req, res, next) {
  res.render('Includes');
});

router.get('/Inheritance', function(req, res, next) {
  res.render('Inheritance');
});
router.get('/Iteration', function(req, res, next) {
  res.render('Iteration',{title:' Jade Iteration'});
});

router.get('/Mixins', function(req, res, next) {
  res.render('Mixins',{title:' Jade Mixins'});
});

module.exports = router;