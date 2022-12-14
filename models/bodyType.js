const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    title: {
        type: String,
        trim: true,
        required: true,
      },
    typeName: {
      type: String,
      trim: true,
      required: true,
    },
    symptom : {
      type: Array,
      trim: true,
      required: true,
    },
  },
);
module.exports = mongoose.model("BodyType", userSchema);