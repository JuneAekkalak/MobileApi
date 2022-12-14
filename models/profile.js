const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true,
        },
        lastName: {
            type: String,
            trim: true,
            required: true,
        },
        age: {
            type: String,
            trim: true,
            required: true,
        },
        birthDate: {
            type: Date,
            trim: true,
            required: true,
        },
        address: {
            type: {
                'houseNumber': "",
                'subDistric': "",
                'distric ': "",
                'province': "",
                'zipcode': "",
            },
            trim: true,
            required: true,
        },
        profileImage: {
            type: String,
            trim: true,
            required: true,
        },
        conDisease: {
            type: String,
            trim: true,
            required: true,
        },
        contact: {
            type: String,
            trim: true,
            required: true,
        },
        account_id: {
            type: ObjectId,
            trim: true,
            required: true,
        },
    },
);
module.exports = mongoose.model("Profile", userSchema);