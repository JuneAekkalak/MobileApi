
const express = require('express');

const router = express.Router();

// controllers
const dailyrecordController = require("../controller/dailyrecord");

router.get("/", (req,res) => {
    return res.json({
        data: "API Symptom",
    });
});

router.post("/createDaily", dailyrecordController.createDailyRecord);
router.get("/getDaily", dailyrecordController.readDailyRecord);
router.get("/getDailyById/:id", dailyrecordController.readDailyRecordById);

module.exports = router;