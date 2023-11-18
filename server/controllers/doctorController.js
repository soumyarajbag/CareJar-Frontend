const Doctor = require("../models/doctorModel");

const addDoctor = async (req, res) => {
  const {
    name,
    image,
    role,
    experience,
    fees,
    place,
    chamber,
    rating,
    patients,
    availability,
  } = req.body;
  if (
    !name ||
    !image ||
    !role ||
    !experience ||
    !fees ||
    !place ||
    !chamber ||
    !rating ||
    !patients ||
    !availability
  ) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  try {
    const newDoctor = new Doctor({
      name,
      image,
      role,
      experience,
      fees,
      place,
      chamber,
      rating,
      patients,
      availability,
    });
    await newDoctor.save();
    res.status(200).json({ status: 201, message: "Doctor added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDoctors = async (req, res) => {
  let doctors;
  try {
    doctors = await Doctor.find();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.status(200).json({ status: 200, doctors: doctors });
};

module.exports = { addDoctor, getDoctors };
