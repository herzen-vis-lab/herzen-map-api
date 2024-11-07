//app/point/pointTypeController.js
const PointType = require('./pointTypeModel');
const { v4: uuidv4 } = require('uuid');

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

//post
const createPointType = async (req, res) => {
  const body = req.body;
  try {
      const CreatedPointType = await PointType.create({ 
        id: body.id, 
        names: body.names, 
        icons: body.icons 
      });
      res.send(`Тип точки ${CreatedPointType.id} создан`);
      return;
    } catch (error) {
      statusCode = 500;
      res.status(statusCode);
      res.json({'status': statusCode, 'message':error.message, 'stack': error.stack});
      return;
    };
  } else {
    statusCode = 400;
    res.status(statusCode);
    res.json({'status': statusCode, 'message':'Формат Body не соответствует спецификации на API', 'stack': 'app/point/pointTypeController.js createPointType'});
    return;
  };
};

module.exports = { getPointTypes, createPointType };

