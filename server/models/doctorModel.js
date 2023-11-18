const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  chamber: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  patients: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
