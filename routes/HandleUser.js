const express = require("express");
const multer = require("multer");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userData = require("./DBConnection");
const { default: axios } = require("axios");
const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const upload = multer({ storage: storage });



router.get("/connect", async (req, res) => {
    let userList = await userData.find().limit(10);
    res.json(userList);
});


module.exports = router;



