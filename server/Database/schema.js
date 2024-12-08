import mongoose from "mongoose";
import Jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});
// JWT TOKEN
userSchema.methods.createToken = function () {
  return Jwt.sign({ id: this._id }, process.env.JWT_SECREAT, {
    expiresIn: "4d",
  });
};

const Schema = mongoose.model("Schema", userSchema);
export default Schema;
