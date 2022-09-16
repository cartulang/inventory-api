const express = require("express");
const router = express.Router();
const { addDevice, getDevices } = require("../controllers/device");

router.get("/", getDevices);
router.post("/", addDevice);

module.exports = router;
