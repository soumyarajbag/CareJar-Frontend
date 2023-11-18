const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { notFound, errorHandler } = require("./middleware/errorHandling");
const connectDB = require("./config/connectDB");
const doctorRouter = require("./routes/doctorRouter");
const specialistRouter = require("./routes/specialistRouter");
require("dotenv").config();

const app = express();
const monk = require("monk");

connectDB();
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Doctors Fetching !");
});

app.use("/api/doctors", doctorRouter);
app.use("/api/specialists", specialistRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
