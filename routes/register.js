var express = require('express');
var router = express.Router();
var authController = require("../controllers/authController");

router.get("/register", authController.register_get);

router.post("/register", authController.register_post);

// Generate Cookies
router.get('/setCookie', (req, res, next) => {
  res.cookie('newUser', false);
  res.send('You Got Cookie!');

// Access Cookies
router.get('/readCookie', (req, res, next) => {
     const cookies = req.cookies;

     console.log(cookies);
     console.log(cookies.newUser);
     res.json();
})
});

module.exports = router;