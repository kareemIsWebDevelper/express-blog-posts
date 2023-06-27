var express = require("express");
var router = express.Router();

var Post = require('../models/post.model');

router.get('/create', function(req, res, next) {
     res.render('create', { title: "Create Post" });
});

module.exports = router;

router.post('/', function(req, res, next) {
     const post = new Post(req.body);
     post.save()
     .then((result) => {
          res.redirect('/');
          console.log(post);
     })
     .catch((error) => {
          console.log(error);
     })
});