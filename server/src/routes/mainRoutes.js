const express = require("express");
const router = express.Router();

// define routes
const testRoute = require("./testRoute");

// use routes
router.use("/test", testRoute);

module.exports = router;
