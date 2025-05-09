const express = require("express");

const app = express();

app.use(express.json());

/** INDEX ROUTE */
app.get("/", (req, res) => {
  res.status(200).json({ message: "Nice app!" });
});

/** ABOUT ROUTE */
app.get("/about", (req, res) => {
  console.log("Pengembangan pada fitur about");

  res.status(200).json({ message: "This is about route." });
});

/** USER ROUTE */
app.get("/users", (req, res) => {
  const users = [
    { name: "Afiq", password: "12345" },
    { name: "Mamun", password: "qwerty" },
  ];

  res.status(200).json({ message: "Get all users.", data: users });
});

/** CATCH ALL ROUTES */
app.all(/(.*)/, (req, res) => {
  res.status(404).json({ message: "Page not found!" });
});

/** EXPORT MODULE */
module.exports = app;
