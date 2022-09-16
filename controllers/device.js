const { Device } = require("../models/device");

const getDevices = async (req, res) => {
  const deviceList = await Device.find();
  res.status(200).json(deviceList).end();
};
const addDevice = (req, res) => {
  const { deviceName, deviceStatus, quantity } = req.body;

  const device = new Device({
    deviceName,
    deviceStatus,
    quantity,
  });

  device
    .save()
    .then(() => {
      res.status(201).json({ status: "success" }).end();
    })
    .catch((e) => {
      res.json({ status: "error" }).end();
    });
};
module.exports = {
  getDevices,
  addDevice,
};
