//app/point/pointTypeController.js

const PointType = require('./pointTypeModel');

//get
const getPointTypes = async (req, res) => {
  try {
    const foundPointTypes = await PointType.findAll();
    res.send(foundPointTypes);
    if(!foundPointTypes) {
      res.status(404);
      res.json({'message':error.message, 'stack': error.stack});
    }	    
  } catch (error) {
    res.status(500);
    res.json({'message':error.message, 'stack': error.stack});
  };
}

module.exports = { getPointTypes };

