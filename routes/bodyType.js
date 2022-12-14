
const express = require('express');

const router = express.Router();

// controllers
const bodyTypeController = require("../controller/bodyType");

router.get("/", (req,res) => {
    return res.json({
        data: "API BodyType",
    });
});

router.post("/type", bodyTypeController.createType);

module.exports = router;