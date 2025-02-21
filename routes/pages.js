const express = require("express");
const path = require("path");

const router = express.Router();

// Home Page
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../pages/home.html"));
});

router.get("/services", (req, res) => {
	res.sendFile(path.join(__dirname, "../pages/services.html"));
});

router.get("/contact", (req, res) => {
	res.sendFile(path.join(__dirname, "../pages/contact.html"));
});

module.exports = router;