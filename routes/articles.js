var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');
var today = new Date();

router.get('/app', function(req, res, next) {
  res.render('articles/app', { title: 'Articles List' });
});

router.get('/', function(req, res, next) {
  Articles.find({}, function(err, articles){
    console.log(articles);
    if(err)
    {
      return handleError(err);
    }
      return res.render('articles/index', { title: 'Article Listing', articles:articles 
    });
  });
});

router.get('view/:slug', function(req, res, next) {
  Articles.findOne({slug:req.params.slug}, function(err, articles){
    if(err)
    {
      return handleError(err);
    }
    else{
      return res.render('articles/view', { title: 'My Selected Article (singular)?', article:articles});
    }
  });
  
});

router.get('/cms', function(req, res, next) {
  res.render('articles/cms', { title: 'CMS' });
});

module.exports = router;
