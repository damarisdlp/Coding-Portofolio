//Dependencies
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//The host and users database to connect to db
mongoose.connect("mongodb://localhost/users", {
  useNewUrlParser: true, //Set to avoid deprecation warnings
  useUnifiedTopology: true, //Set to avoid deprecation warnings
});

const Schema = mongoose.Schema;

//Creating the User model with 2 properties
const User = new Schema({
  username: String,
  password: String,
});

//Exporting
User.plugin(passportLocalMongoose);
module.exports = mongoose.model("userData", User, "userData");
