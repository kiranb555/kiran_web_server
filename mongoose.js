const mongoose = require("mongoose");
const Contact = require("./models/contact");
const constant = require("./constants");

mongoose
  .connect(constant.MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected mongo successfully !!"))
  .catch((err) => console.log(err));

const createContact = async (req, res, next) => {
  const createdContact = new Contact({
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message,
  });

  const result = await createdContact.save();

  res.json(result);
};

exports.createContact = createContact;
