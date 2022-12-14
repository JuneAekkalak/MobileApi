
const express = require('express');

const router = express.Router();

// controllers
const symtomController = require("../controller/symptom");

router.get("/", (req,res) => {
    return res.json({
        data: "API Symptom",
    });
});

router.post("/createSymtom", symtomController.createSymptom);

module.exports = router;