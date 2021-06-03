const express = require("express");
const mongoose = require("mongoose");

const homeRoute = require("./routes/home-routes");
const contactRoute = require("./routes/contact-routes");
// const aboutRoute = require("./routes/about-routes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/", homeRoute);
app.use("/api/contact", contactRoute);

const URL = require("./constants");
// post about data
// app.use("/api/about", aboutRoute);

mongoose
  .connect(URL.MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
