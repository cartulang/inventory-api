const { Device } = require("../models/device");
const { Transaction } = require("../models/transaction");

const getDevices = async (req, res) => {
    const deviceList = await Device.find();
    const deviceJson = deviceList.map(device => {
      const { deviceName, deviceStatus, quantity, _id } = device
      return new Object({
        Id: _id,
        DeviceName: deviceName,
        DeviceStatus: deviceStatus,
        Quantity: quantity
    });
    })

    res.status(200).json(deviceJson).end();
};

const addDevice = async (req, res) => {
  const { deviceName, deviceStatus, quantity } = req.body;
  const device = new Device({
    deviceName,
    deviceStatus,
    quantity,
  });

  const transaction = createTransaction(deviceName, quantity);
  console.log(transaction)
  try {
    await device.save();
    await transaction.save();
    res.status(201).json({message: "success"}).end();
    return;
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "error"}).end();
    return
  }
};

module.exports = {
  getDevices,
  addDevice,
};


const createTransaction = (deviceName, quantity) => {;
  const date = new Date().toLocaleString();

  return new Transaction({
    deviceName,
    quantity,
    operation: "Restock",
    date
  })
}