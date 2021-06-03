const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  secondName: {
    type: String,
    require: false,
  },
  phone: {
    type: Number,
    require: false,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
