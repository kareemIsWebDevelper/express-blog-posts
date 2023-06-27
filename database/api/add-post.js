var Post = require('../../models/post.model');

var express = require("express");
var router = express.Router();

var mongoose = require('mongoose');
const url = "mongodb+srv://kareem:7410@cluster0.mwlkotc.mongodb.net/Blog?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => {
     console.log("Connected");
})
.catch((error) => console.log(error))

router.get("/", function(req, res, next) {
  const post = new Post({
    title: "My Second Blog",
    body: "Hello EveryBody!",
    author: "John Doe"
  });
  post.save()
  .then((result) => {
    res.send(result);
  })
  .catch((error)=> {
    console.log(error);
  } )
});

module.exports = router;