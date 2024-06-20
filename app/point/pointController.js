//app/point/pointController.js

const { Op } = require('sequelize')
const Point = require('./pointModel');

//get
const getPoints = async (req, res) => {
  let result = await Point.findAll();
  res.send(result);
};

//get
const getPointById = async (req, res) => {
  const pointId = req.params.pointId; 
  let result = await Point.findAll(
    {where: {id: pointId }}
  );
  res.send(result);
};

//post
const createPoint = (req, res) => {
  const body = req.body;
  res.send(`Ответ на POST запрос ${body}`);
};

//patch
const updatePoint = (req, res) => {
  const body = req.body;
  res.send(`Ответ на PATCH запрос ${body}`);
};

module.exports = {
  getPoints, getPointById, createPoint, updatePoint
};

