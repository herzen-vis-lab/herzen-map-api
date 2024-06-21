//app/point/pointTypeController.js

const PointType = require('./pointTypeModel');

//get
const getPointTypes = async (req, res) => {
  let foundPointTypes = await PointType.findAll();
  res.send(foundPointTypes);
};

module.exports = { getPointTypes };

