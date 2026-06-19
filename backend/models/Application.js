const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  applicantName: String,
  buildingName: String,
  address: String,
  buildingType: String,
  floorPlan: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model(
  "Application",
  ApplicationSchema
);