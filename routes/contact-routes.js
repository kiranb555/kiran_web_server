const express = require("express");
const { check } = require("express-validator");

const contactController = require("../controller/contact-controller");

const router = express.Router();

router.post(
  "/",
  [check("firstName").not().isEmpty(), check("email").not().isEmpty()],
  contactController.createContact
);

module.exports = router;
