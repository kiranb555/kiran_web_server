const HttpError = require("../models/http-error");
const About = require("../models/about");

const getAllData = async (req, res, next) => {
  try {
    let aboutsList = await About.find();
    res.json(aboutsList);
    if (aboutsList.length === 0 || !aboutsList) {
      let error = new HttpError("No data available", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not find data",
      500
    );
    return next(error);
  }
};

exports.getAllData = getAllData;
