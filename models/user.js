const mongoose = require("mongoose"); // import mongoose
// extract the schema from that mongoose object
const Schema = mongoose.Schema;
// create a new user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  pkey: {
    type: String,
    required: false,
  },
});
// export the model
const User = mongoose.model("User", userSchema);

module.exports = User;
