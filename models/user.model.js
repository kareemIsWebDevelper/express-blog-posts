const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
 
const userSchema = new mongoose.Schema({
     username: {
          type: String,
          required: [true, "This field cannot be blank!"],
          lowercase: true
     },
     email: {
          type: String,
          requried: [true, "This field cannot be blank!"],
          unique: true,
          lowercase: true,
          validate: [isEmail, "Please enter avalid email!"]
     },
     password: {
          required: [true, "This field cannot be blank!"],
          type: String,
          minLength: [6, "6 letter at least!"]
     },
});

userSchema.pre('save', async function(next) {
     const salt = await bcrypt.genSalt();
     this.password - await bcrypt.hash(this.password, salt);
     next();
})

const User = mongoose.model("user", userSchema);

module.exports = User;