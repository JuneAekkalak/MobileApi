const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    symptomName: {
      type: String,
      trim: true,
      required: true,
    },
    img  : {
      type: String,
      trim: true,
      required: true,
    },
    discription  : {
        type: String,
        trim: true,
        required: true,
    }
  },
);
module.exports = mongoose.model("Symptom", userSchema);