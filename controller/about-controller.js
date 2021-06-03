const HttpError = require("../models/http-error");
const About = require("../models/about");

const createAbout = async (req, res, next) => {
  const { skills, experience } = req.body;
  const createAbout = new About({
    skills,
    experience,
  });
  try {
    await createAbout.save();
  } catch (err) {
    const error = new HttpError(
      "Failed to post data, please try again later",
      500
    );

    return next(error);
  }
  res.status(201).json({ about: createAbout });
};

exports.createAbout = createAbout;
