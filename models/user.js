const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    image: {
      public_id: "",
      url: "",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);