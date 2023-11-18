const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Specialist = mongoose.model("Specialist", specialistSchema);
module.exports = Specialist;
