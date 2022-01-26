let mongoose = require("mongoose");
let Schema = mongoose.Schema;
const jwt=require('jsonwebtoken')
const userSchema = new Schema({
  id: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: [true, "email required"],
    unique: [true, "email already registered"],
  },
  firstName: String,
  lastName: String,
  profilePhoto: String,
  password: String,
  source: { type: String, required: [true, "source not specified"] },
  lastVisited: { type: Date, default: new Date() }
});
userSchema.methods.generateAuthToken=function(){
  token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY);
  console.log(token)
  process.env.token=token;
  return token;
}
var userModel = mongoose.model("user", userSchema, "user");

module.exports = userModel;
