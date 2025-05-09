const express = require("express");

const app = express();

app.use(express.json());

/** INDEX ROUTE */
app.get("/", (req, res) => {
  res.status(200).json({ message: "Nice app!" });
});

/** ABOUT ROUTE */
app.get("/about", (req, res) => {
  res.status(200).json({ message: "What you looking for?" });
});

/** CATCH ALL ROUTES */
app.all(/(.*)/, (req, res) => {
  res.status(404).json({ message: "Page not found!" });
});

/** EXPORT MODULE */
module.exports = app;
