const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const Contact = require("../models/contact");

const createContact = async (req, res, next) => {
  const { firstName, secondName, phone, email, message } = req.body;

  const createContact = new Contact({
    firstName,
    secondName,
    phone,
    email,
    message,
  });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid input passed, please check your data.", 422);
  }
  try {
    await createContact.save();
  } catch (err) {
    const error = new HttpError(
      "Creating contact failed, please try again later",
      500
    );
    return next(error);
  }
  res.status(201).json({ contact: createContact });
};

exports.createContact = createContact;
