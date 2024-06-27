//app/point/pointController.js
const Point = require('./pointModel');
const { v4: uuidv4 } = require('uuid');
const { validate: isValidUUID } = require('uuid');

//check body
const isValidBody = (body) => {
  if(1===1) { 	
    if(body.project_id){
      console.log(typeof(body.project_id));
    
    };
    return true;
  } else {
    return false;
  };
};

//get
const getPoints = async (req, res) => {
  let statusCode = 200;
  const projectId = req.params.projectId;
  try {
    const foundPoints = await Point.findAll(
      {where: {project_id: projectId}}
    );
    if(typeof(foundPoints[0]) == "undefined") {	//если ничего на нашёд, ORM возвращает объект []  
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
  if (isValidBody(body)) { //отдельная функция проверки body
    try {
      const CreatedPoint = await Point.create({ 
        id: uuidv4(), 
        type_id: body.type_id,
        latitude: body.latitude,
        longitude: body.longitude,
        web: body.web, 
        names: body.names, 
        descriptions: body.descriptions, 
        videos: body.videos, 
        photos: body.photos,
        status_id: body.status_id,
        project_id: body.project_id	  
      });
      res.send(`Точка ${CreatedPoint.id} создана`);
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
    res.json({'status': statusCode, 'message':'Формат Body не соответствует спецификации на API', 'stack': 'app/point/pointController.js createPoint'});
    return;
  };
};

//patch
const updatePoint = async (req, res) => {
  let statusCode = 200;
  const pointId = req.params.pointId;
  if (!isValidUUID(pointId)) { //проверка на формат UUID
    statusCode = 400;
    res.status(statusCode);
    res.json({'status': statusCode, 'message':`Формат ${pointId} не соответствуют UUID`, stack:'app/point/pointController.js updatePoint'});
    return;
  }	
  const FoundPoint = await Point.findOne({ where: { id: pointId } });
  if(FoundPoint === null) { //если ничего на нашёл, ORM возвращает объект со значением null
    statusCode = 400;
    res.status(statusCode);
    res.json({'status': statusCode, 'message':`Точка ${pointId} не найдена`, stack:'app/point/pointController.js updatePoint'});
    return;
  } else {
    const body = req.body;
    if(isValidBody(body)) { //отдельная функция проверки body	  
      try {	  
        await FoundPoint.update({     
          type_id: body.type_id,
          latitude: body.latitude,
          longitude: body.longitude,
          web: body.web,
          names: body.names,
          descriptions: body.descriptions,
          videos: body.videos,
          photos: body.photos,
          status_id: body.status_id
       });
       res.send(`Точка ${FoundPoint.id} обновлена`);     
      } catch (error) {
        status = 500;
        res.json({'message':error.message, 'stack': error.stack});
        return;      
      };
    } else {
      statusCode = 400;
      res.status(statusCode);
      res.json({'status': statusCode, 'message':'Формат Body не соответствует спецификации на API', 'stack': 'app/point/pointController.js updatePoint'});
      return;
    };	    
  };
};

module.exports = {
  getPoints, getPointById, createPoint, updatePoint
};
