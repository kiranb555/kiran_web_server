const mongoose = require("mongoose");

const companyDetailSchema = new mongoose.Schema({
  company_name: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  period: {
    type: String,
    require: true,
  },
  projects: {
    type: String,
    require: true,
  },
  team_size: {
    type: String,
    require: true,
  },
  skills: [String],
  description: {
    type: String,
    require: true,
  },
});
const aboutSchema = new mongoose.Schema({
  skills: [String],
  experience: [companyDetailSchema],
});

module.exports = mongoose.model("about", aboutSchema);
