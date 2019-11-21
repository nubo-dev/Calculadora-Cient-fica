const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.get("*", (req, res, next) => {
  res.render("index.ejs", {
    title: "Calculadora Científica, NN."
  });
});
module.exports = router;
