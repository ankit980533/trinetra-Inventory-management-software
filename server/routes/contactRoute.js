const express = require("express");
const { contactUs } = require("../controllers/contactController");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });
router.post("/", protect, contactUs);

module.exports = router;
