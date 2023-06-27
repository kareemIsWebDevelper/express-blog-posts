var express = require('express');
var app = express();
var router = express.Router();

const mongodb = require("mongodb");
var Post = require('../models/post.model');

router.get('/details/:id', function(req, res, next) {
  const id = req.params.id;
  Post.findOne({ _id: new mongodb.ObjectId(id) })
  .then((result) => {
    res.render('details', { title: 'Post Details', post: result });
  })
  .catch((error) => {
    console.log(error);
  })
}); 
module.exports = router;  

router.delete("/details/:id", (req, res) => {
  const id = req.params.id;

  Post.deleteOne({ _id: new mongodb.ObjectId(id) })
  .then((result) => {
       res.redirect('/');
       console.log(post);
  })
  .catch((error) => {
       console.log(error);
  })
});

