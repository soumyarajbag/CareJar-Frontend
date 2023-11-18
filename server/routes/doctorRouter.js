const express = require("express");
const { addDoctor, getDoctors } = require("../controllers/doctorController");

const doctorRouter = express.Router();

doctorRouter.post("/add", addDoctor);
doctorRouter.get("/", getDoctors);

module.exports = doctorRouter;
