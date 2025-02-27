// INCLUDES
const express = require("express");
const router = express.Router();
const controller = require("../controllers/testController");

// CONTROLLERS
router.get("/", controller.testControllerFunction);

module.exports = router;