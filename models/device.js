const mongoose = require("mongoose");
const { Schema } = mongoose;

const deviceSchema = new Schema({
  deviceName: String,
  deviceStatus: String,
  quantity: Number,
  dateAdded: String,
});

const Device = mongoose.model("Device", deviceSchema);

module.exports = {
  Device,
};
