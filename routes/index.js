const express = require("express");
const router = express.Router();
const dotenv = require('dotenv')
dotenv.config({ path: './.env'})
const MAGIC_PUBLISHABLE_KEY = process.env.MAGIC_PUBLISHABLE_KEY;

// GET home page
router.get("/", (req, res) => {
  res.render("index", { title: "Magic Apple Store 🍎", MAGIC_PUBLISHABLE_KEY });
});

module.exports = router;