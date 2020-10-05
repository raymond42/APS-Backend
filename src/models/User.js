import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", UserSchema);
