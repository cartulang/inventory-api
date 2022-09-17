const PORT = 8001;
const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const dbUri = process.env.DB_CONNECTION;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

mongoose.connect(dbUri, () => console.log("connected to db"));

// routes
const deviceRoute = require("./routes/device");
const transactionRoute = require("./routes/transaction");
app.use("/device", deviceRoute);
app.use("/transaction", transactionRoute);
app.all("*", (req, res) => res.status(404).send("Not found").end())

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
