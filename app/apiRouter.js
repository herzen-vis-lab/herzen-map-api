const express = require('express');
const router = express.Router();
const pointController = require('./point/pointController');

/**
 * @swagger
 * /api/points:
 *   get:
 *     summary: Получить информацию о точках
 *     description: Получить информацию о точках
 *     tags: [Point]
 *     responses:
 *       200:
 *         description: Ok
 *         schema:
 *           $ref: '#/definitions/Points'
*/
router.get('/points', pointController.getPoints);

/**
 * @swagger
 * /api/point/{pointId}:
 *   get:
 *     summary: Получить информацию о точках
 *     description: Получить информацию о точках
 *     tags: [Point]
 *     parameters:
 *      - name: pointId
 *        description: Уникальный идентификатор точки
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
 *     requestBody:
 *       content:
 *         'application/json':
 *           schema:
 *             $ref: '#/definitions/Point'
 *     responses:
 *       200:
 *         description: Ok
*/
router.post('/point', pointController.createPoint);

/**
 * @swagger
 * /api/point:
 *   patch:
 *     summary: Изменить точку
 *     description: Изменить точку
 *     tags: [Point]
 *     requestBody:
 *       content:
 *         'application/json':
 *           schema:
 *             $ref: '#/definitions/Point'
 *     responses:
 *       200:
 *         description: Ok
*/
router.patch('/point', pointController.updatePoint);

module.exports = router;
