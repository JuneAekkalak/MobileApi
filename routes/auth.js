
const express = require('express');

const router = express.Router();

// controllers
const authController = require("../controller/auth");

router.get("/", (req,res) => {
    return res.json({
        data: "hello world from the API",
    });
});

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.get("/finduser", authController.findUser);
router.get("/findbyid/:id", authController.findByid);

// router.post("/forget-password", forgetPassword);
// router.post("/reset-password", resetPassword);
module.exports = router;