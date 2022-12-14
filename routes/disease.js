
const express = require('express');

const router = express.Router();

// controllers
const diseaseController = require("../controller/disease");

router.get("/", (req,res) => {
    return res.json({
        data: "API Symptom",
    });
});

router.post("/createDisease", diseaseController.createDisease);
router.get("/getDisease", diseaseController.readDisease);
router.get("/getDiseaseById/:id", diseaseController.readDiseaseById);

module.exports = router;