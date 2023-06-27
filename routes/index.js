var express = require('express');
var app = express();
var router = express.Router();

var Post = require("../models/post.model");

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find().sort({ createdAt: -1 })
  .then((result) => {
    res.render('index', { title: 'Blog Home', posts: result });
  })
  .catch((error) => {
    console.log(error);
  })
}); 
module.exports = router;


