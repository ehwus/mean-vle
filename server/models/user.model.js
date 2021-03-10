const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateAccountCreated: {
    type: Date,
    default: Date.new,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userClass: {
    type: String,
    enum: ["student", "administrator"],
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
