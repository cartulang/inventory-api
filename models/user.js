const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  userName: String,
  password: String,
  isAdmin: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
