const express = require("express");
const {
  addSpecialist,
  getSpecialists,
} = require("../controllers/specialistController");

const specialistRouter = express.Router();

specialistRouter.post("/add", addSpecialist);
specialistRouter.get("/", getSpecialists);

module.exports = specialistRouter;
