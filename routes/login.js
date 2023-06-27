var express = require('express');
var router = express.Router();

var authController = require("../controllers/authController");

router.get("/login", authController.login_get);

router.post("/login", authController.login_post);

module.exports = router;