//app/point/pointController.js

const getPoints = (req, res) => {
  res.send([
     {
       id: "1",
       longitude: 1.1,
       latitude: 1.1,
       changedAt: "2022-01-01",
     }
    ]);
};

//get
const getPointById = (req, res) => {
  const pointId = req.params.pointId; 
  res.send(`Ответ на запрос для точки с id ${pointId}`);
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

