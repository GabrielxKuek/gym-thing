const testModel = require("../models/testModel.js");

module.exports.testControllerFunction = (req, res, next) => {
  const testMessage = testModel.testModelFunction();
  res.status(200).send(testMessage);
};