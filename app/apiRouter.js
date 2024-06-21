const express = require('express');
const router = express.Router();
const pointController = require('./point/pointController');
const pointTypeController = require('./pointType/pointTypeController');

/**
 * @swagger
 * /api/point:
 *   get:
 *     summary: Получить информацию о всех точках
 *     description: Получить информацию о всех точках
 *     tags: [Point]
 *     responses:
 *       200:
 *         description: Ok
 *         schema:
 *           $ref: '#/definitions/Points'
*/
router.get('/point', pointController.getPoints);

/**
 * @swagger
 * /api/point/{pointId}:
 *   get:
 *     summary: Получить данные конкретной точки
 *     description: Получить данные конкретной точки
 *     tags: [Point]
 *     parameters:
 *      - name: pointId
 *        description: Уникальный идентификатор
 *        in: path
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Ok
 *         schema:
 *           $ref: '#/definitions/Point' 
*/
router.get('/point/:pointId', pointController.getPointById);

/**
 * @swagger
 * /api/point:
 *   post:
 *     summary: Создать точку
 *     description: Создать точку
 *     tags: [Point]
 *     parameters:
 *      - in: body
 *        name: user
 *        description: Данные для создания.
 *        schema:
 *          $ref: '#/definitions/PointBody'
 *     responses:
 *       200:
 *         description: Ok
*/
router.post('/point', pointController.createPoint);

/**
 * @swagger
 * /api/point/{pointId}:
 *   patch:
 *     summary: Изменить данные точки
 *     description: Изменить данные точки
 *     tags: [Point]
 *     parameters:
 *      - in: path
 *        name: pointId
 *        description: Уникальный идентификатор
 *        required: true
 *        type: string
 *      - in: body
 *        name: user
 *        description: Данные для изменения.
 *        schema:
 *          $ref: '#/definitions/PointBody' 
 *     responses:
 *       200:
 *         description: Ok
 *       404:
 *         description: Point not found
 *       500:
 *         description: Internal server error
*/
router.patch('/point/:pointId', pointController.updatePoint);

/**
 * @swagger
 * /api/pointType:
 *   get:
 *     summary: Получить информацию о типах точек
 *     description: Получить информацию о типах точек
 *     tags: [Point type]
 *     responses:
 *       200:
 *         description: Ok
 *         schema:
 *           $ref: '#/definitions/PointTypes'
*/
router.get('/pointType', pointTypeController.getPointTypes);

module.exports = router;
