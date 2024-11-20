import mongoose, { model } from "mongoose";
import { user } from "../interfaces/user";
import jwt from "jsonwebtoken"

interface iuserData extends user, mongoose.Document {}

const userSchema = new mongoose.Schema<iuserData>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  verificationToken: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default : false
  },
  
});

userSchema.methods.getjwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const userModel = model("users", userSchema);
