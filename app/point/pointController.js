//app/point/pointController.js

const Point = require('./pointModel');
const { v4: uuidv4 } = require('uuid');

//get
const getPoints = async (req, res) => {
  let foundPoints = await Point.findAll();
  res.send(foundPoints);
};

//get
const getPointById = async (req, res) => {
  const pointId = req.params.pointId;
  try {
    let foundPoint = await Point.findAll(
      {where: {id: pointId }}
    );
    res.send(foundPoint);
  } catch {
    res.status(400);
    res.send(`Объект не найден`);
  };
};

//post
const createPoint = async (req, res) => {
  const body = req.body;
  const point = await Point.create({ id: uuidv4(), type_id: body.type_id, latitude: body.latitude, longitude: body.longitude, web: body.web, names: body.names, descriptions: body.descriptions, videos: body.videos, photos: body.photos, status_id: body.status_id});
  res.send(`${point.id}`);
};

//patch
const updatePoint = async (req, res) => {
  const pointId = req.params.pointId;
  const body = req.body;
  try {
    let foundPoint = await Point.findOne({ where: { id: pointId } });
    if (!foundPoint) {
      res.status(404).send('Point not found');
      return; 
    }
    await foundPoint.update({     
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
    console.log(foundPoint);
    res.send(`${foundPoint.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  getPoints, getPointById, createPoint, updatePoint
};

