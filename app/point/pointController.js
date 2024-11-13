//app/point/pointController.js
const Point = require('./pointModel');
const { v4: uuidv4 } = require('uuid');
const { validate: isValidUUID } = require('uuid');

//check body
const isValidBody = (body) => {
  if (!body) {
    return false;
  }
  return true;
};

//get
const getPoints = async (req, res) => {
  let statusCode = 200;
  const projectId = req.params.projectId;
  try {
    const foundPoints = await Point.findAll(
      {where: {project_id: projectId}}
    );
    if(typeof(foundPoints[0]) == "undefined") {
      statusCode = 400;
      res.status(statusCode);
      res.json({'status': statusCode, 'message':`Точки для проекта ${projectId} не найдены`, stack:'app/point/pointController.js getPoints'});      
      return; 
    } else {
      const count = Object.keys(foundPoints).length;    
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.json({'count': count, 'data': foundPoints});
      return;
    };
  } catch (error) {
    statusCode = 500;  
    res.status(statusCode);
    res.json({'status': statusCode, 'message':error.message, 'stack': error.stack});	  
  };
};

//get
const getPointById = async (req, res) => {
  let statusCode = 200;
  const pointId = req.params.pointId;
  if (!isValidUUID(pointId)) { //проверка на формат UUID
    statusCode = 400;
    res.status(statusCode);
    res.json({'status': statusCode, 'message':`Формат ${pointId} не соответствуют UUID`, stack:'app/point/pointController.js getPointById'});
    return;
  }
  try {
    const foundPoint = await Point.findOne({ where: { id: pointId } });
    if(foundPoint === null) { //если ничего на нашёл, ORM возвращает объект со значением null
      statusCode = 400;
      res.status(statusCode);
      res.json({'status': statusCode, 'message':`Точка ${pointId} не найдена`, stack:'app/point/pointController.js getPointById'});
      return;  
    } else {
      const count = Object.keys(foundPoint).length;
      res.json({'count': count, 'data': foundPoint});
      return;
    }
  } catch (error) {
    statusCode = 500;
    res.status(statusCode);
    res.json({'status': statusCode, 'message':error.message, 'stack': error.stack});
    return;  
  };
};

//post
const createPoint = async (req, res) => {
  const body = req.body;
  if (isValidBody(body)) {
    try {
      const CreatedPoint = await Point.create({ 
        id: uuidv4(), 
        type_id: body.type_id,
        latitude: body.latitude,
        longitude: body.longitude,
        web: body.web, 
        names: body.names, 
        descriptions: body.descriptions, 
        picture: body.picture,
        status_id: body.status_id,
        project_id: body.project_id	  
      });
      res.status(201).json({ message: `Точка ${CreatedPoint.id} создана`, id: CreatedPoint.id });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: 'Ошибка сервера при создании точки',
        error: error.message
      });
    }
  } else {
    res.status(400).json({
      status: 400,
      message: 'Формат Body не соответствует спецификации на API'
    });
  }
};

//patch
const updatePoint = async (req, res) => {
  const pointId = req.params.pointId;

  if (!isValidUUID(pointId)) {
    return res.status(400).json({
      status: 400,
      message: `Формат ${pointId} не соответствует UUID`,
      stack: 'app/point/pointController.js updatePoint'
    });
  }

  try {
    const foundPoint = await Point.findOne({ where: { id: pointId } });

    // Проверка, найден ли объект
    if (foundPoint === null) {
      return res.status(404).json({
        status: 404,
        message: `Точка ${pointId} не найдена`,
        stack: 'app/point/pointController.js updatePoint'
      });
    }

    const body = req.body;

    // Проверка валидности тела запроса
    if (!isValidBody(body)) {
      return res.status(400).json({
        status: 400,
        message: 'Формат Body не соответствует спецификации на API',
        stack: 'app/point/pointController.js updatePoint'
      });
    }

    // Обновление объекта
    await foundPoint.update({
      type_id: body.type_id,
      latitude: body.latitude,
      longitude: body.longitude,
      web: body.web,
      names: body.names,
      descriptions: body.descriptions,
      picture: body.picture,
      status_id: body.status_id
    });

    res.status(200).json({
      message: `Точка ${foundPoint.id} обновлена`,
      id: foundPoint.id
    });

  } catch (error) {
    // Обработка ошибок
    res.status(500).json({
      status: 500,
      message: 'Ошибка сервера при обновлении точки',
      error: error.message,
      stack: error.stack
    });
  }
};

module.exports = {
  getPoints, getPointById, createPoint, updatePoint
};
