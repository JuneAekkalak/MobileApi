
const express = require('express');

const router = express.Router();

// controllers
const profileController = require("../controller/profile");

router.get("/", (req,res) => {
    return res.json({
        data: "API Symptom",
    });
});

router.post("/createProfile", profileController.createProfile);
router.get("/getProfile", profileController.readProfile);
router.get("/getProfileById/:id", profileController.readProfileById);

module.exports = router;