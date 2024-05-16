const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String,required:true },
  last_name: { type: String,required:true },
  location: { type: String,required:true },
  description: { type: String, required:true },
  occupation: { type: String,required:true },
  email: { type: String,required:true,unique:true },
  password: { type: String,required:true,validate:{
    validator:(value) => value.length >= 6,
    message:'Password must be at least 6 characters long'
  } },
});

module.exports = mongoose.model.Users || mongoose.model("Users", userSchema);
