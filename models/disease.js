const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    diseaseName: {
      type: String,
      trim: true,
      required: true,
    },
    detail : {
      type: String,
      trim: true,
      required: true,
    },
    symptom   : {
        type: String,
        trim: true,
        required: true,
    },
    complications : {
        type: String,
        trim: true,
        required: true,
    },
    progression : {
        type: String,
        trim: true,
        required: true,
    },
    isolation  : {
        type: String,
        trim: true,
        required: true,
    },
    cause  : {
        type: String,
        trim: true,
        required: true,
    },
    treatment  : {
        type: String,
        trim: true,
        required: true,
    },
    selfCare   : {
        type: String,
        trim: true,
        required: true,
    },
    symptomKeyword  : {
        type: Array,
        trim: true,
        required: true,
    }
  },
);
module.exports = mongoose.model("Disease", userSchema);