const Specialist = require("../models/specialistModel");

const addSpecialist = async (req, res) => {
  const { name, image, description } = req.body;
  if (!name || !image || !description) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  try {
    const newSpecialist = new Specialist({
      name,
      image,
      description,
    });
    await newSpecialist.save();
    res
      .status(200)
      .json({ status: 201, message: "Specialist added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSpecialists = async (req, res) => {
  let specialists;
  try {
    specialists = await Specialist.find();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.status(200).json({ status: 200, specialists: specialists });
};

module.exports = { addSpecialist, getSpecialists };
