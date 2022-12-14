
const express = require('express');

const router = express.Router();

// controllers
const bodyTypeController = require("../controller/bodyType");

router.get("/", (req,res) => {
    return res.json({
        data: "API BodyType",
    });
});

router.post("/crateType", bodyTypeController.createType);
router.get("/getType", bodyTypeController.readBodyType); 
router.get("/getTypeById/:id", bodyTypeController.readBodyTypeById);

module.exports = router;