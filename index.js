const PORT = 8001;
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dbUri =
  "mongodb+srv://cartulang:QsCNm656s84zy5aP@cluster0.gcmfun2.mongodb.net/DeviceInventory?retryWrites=true&w=majority";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(dbUri, () => console.log("connected to db"));

// routes
const deviceRoute = require("./routes/device");
app.use("/device", deviceRoute);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
