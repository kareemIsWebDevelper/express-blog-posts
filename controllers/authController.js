const User = require("../models/user.model");

// Handle Errors
// const handleError = (error) => {
//      console.log(error.message, error.code);
//      let error = { username: '', email: '', password: '' };

//      // Validate Errors
//      if(error.message.include('user validation faild'));
//      Object.values(error.errors).forEach(error => {
//           console.log(error);
//      });
// }    

module.exports.login_get = function(req, res, next) {
     res.render('login', { title: "Login Page" });
}

module.exports.register_get = function(req, res, next) {
     res.render('register', { title: "Register Page" });
}

module.exports.register_post = async function(req, res, next) {
     const { username, email, password } = req.body;
     
     try {
         const user = await User.create({ username, email, password });
         res.status(201).json(user);
     }
     catch(error) {
          handleError(error);
          res.status(400).send("error user is not created!");
     }
}

module.exports.login_post = async function(req, res, next) {
     console.log(req.body);
     res.send("User's login!");
}
