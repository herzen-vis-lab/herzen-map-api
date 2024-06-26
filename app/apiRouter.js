const express = require('express');
const router = express.Router();
const pointController = require('./point/pointController');
const pointTypeController = require('./pointType/pointTypeController');

/**
 * @swagger
 * /api/point/project/{projectId}:
 *   get:
 *     summary: Получить информацию о всех точках проекта
 *     description: Получить информацию о всех точках проекта
 *     tags: [Point]
 *     parameters:
 *      - name: projectId
 *        description: Уникальный идентификатор проекта
 *        in: path
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Успешно
 *         schema:
 *           $ref: '#/definitions/Points'
 *       400:
 *         description: Ошибка клиента
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Ошибка сервера
 *         schema:
 *           $ref: '#/definitions/Error'
*/
router.get('/point/project/:projectId', pointController.getPoints);

/**
 * @swagger
 * /api/point/id/{pointId}:
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
 *         description: Успешно
 *         schema:
 *           $ref: '#/definitions/Point'
 *       400:
 *         description: Ошибка клиента
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Ошибка сервера
 *         schema: 
 *           $ref: '#/definitions/Error'
*/
router.get('/point/id/:pointId', pointController.getPointById);

/**
 * @swagger
 * /api/point:
 *   post:
 *     summary: Создать точку
 *     description: Создать точку
 *     tags: [Point]
 *     parameters:
 *      - in: body
 *        name: Point
 *        description: Данные для создания
 *        schema:
 *          $ref: '#/definitions/PointBody'
 *     responses:
 *       200:
 *         description: Успешно
 *       400:
 *         description: Ошибка клиента
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Ошибка сервера
 *         schema: 
 *           $ref: '#/definitions/Error' 
*/
router.post('/point', pointController.createPoint);

/**
 * @swagger
 * /api/point/id/{pointId}:
 *   patch:
 *     summary: Изменить данные точки
 *     description: Изменить данные точки
 *     tags: [Point]
 *     parameters:
 *      - in: path
 *        name: pointId
 *        description: Уникальный идентификатор точки
 *        required: true
 *        type: string
 *      - in: body
 *        name: Point
 *        description: Данные для изменения
 *        schema:
 *          $ref: '#/definitions/PointBody' 
 *     responses:
 *       200:
 *         description: Успешно
 *       400:
 *         description: Ошибка клиента
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Ошибка сервера
 *         schema: 
 *           $ref: '#/definitions/Error'
*/
router.patch('/point/id/:pointId', pointController.updatePoint);

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
 *       400:
 *         description: Ошибка клиента
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Ошибка сервера
 *         schema: 
 *           $ref: '#/definitions/Error'           
*/
router.get('/pointType', pointTypeController.getPointTypes);

module.exports = router;
