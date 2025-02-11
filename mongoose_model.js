// basic mongoose model
// npm i mongoose

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username:{
    typeof : String,
    required : true,
    lowercase : true
  },
  email : {
    typeof : String,
    required : true,
    unique : true,
    lowercase : true
  },
  password  : {
    typeof : true,
    required : [true,"password is required"]
  }
});

export const User = mongoose.model("User",userSchema);

