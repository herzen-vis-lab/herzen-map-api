const PointType = require('./pointTypeModel');
const { v4: uuidv4 } = require('uuid');

const getPointTypes = async (req, res) => {
  try {
    const foundPointTypes = await PointType.findAll();
    if (!foundPointTypes || foundPointTypes.length === 0) {
      res.status(404).json({
        message: 'Типы точек не найдены',
      });
      return;
    }
    res.status(200).json(foundPointTypes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
};

const createPointType = async (req, res) => {
  const { names, icons } = req.body;

  if (!names || !icons) {
    const statusCode = 400;
    return res.status(statusCode).json({
      status: statusCode,
      message: 'Формат Body не соответствует спецификации на API',
      stack: 'app/point/pointTypeController.js createPointType',
    });
  }

  try {
    const createdPointType = await PointType.create({
      id: uuidv4(),
      names,
      icons,
    });

    res.status(201).send(`Тип точки с ID ${createdPointType.id} создан`);
  } catch (error) {
    const statusCode = 500;
    res.status(statusCode).json({
      status: statusCode,
      message: error.message,
      stack: error.stack,
    });
  }
};

module.exports = { getPointTypes, createPointType };