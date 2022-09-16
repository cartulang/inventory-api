const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
  deviceName: String,
  user: String,
  operation: String,
  date: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = {
  Transaction,
};
