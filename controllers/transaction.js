const { Transaction } = require("../models/transaction");

const getTransactions = async (req, res) => {
  const transactions = await Transaction.find();
  const transactionsJson = transactions.map(transaction => {
    const {_id, deviceName, operation,  date} = transaction;

    return new Object({
      Id: _id,
      DeviceName: deviceName,
      Operation: operation,
      Date: date
    })
  })

  res.json(transactionsJson).end();
};
const addTransaction = (req, res) => {};

module.exports = {
  getTransactions,
  addTransaction,
};
