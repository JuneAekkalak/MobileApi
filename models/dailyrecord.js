const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        user_id: {
            type: ObjectId,
            trim: true,
            required: true,
        },
        dateRecord: {
            type: Date,
            trim: true,
            required: true,
        },

        haveSymptoms: {
            type: Array,
            trim: true,
            required: true,
        },
        relatedDiseases: {
            type: Array,
            trim: true,
            required: true,
        },
        dailyDescription: {
            type: String,
            trim: true,
            required: true,
        }
    },
);
module.exports = mongoose.model("DailyRecord", userSchema);