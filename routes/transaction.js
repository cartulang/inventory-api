const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
} = require("../controllers/transaction");

router.get("/", getTransactions);
router.post("/", addTransaction);

module.exports = router;
