const express = require("express");

const aboutController = require("../controller/about-controller");

const router = express.Router();

router.get("/", aboutController.createAbout);

module.exports = router;
