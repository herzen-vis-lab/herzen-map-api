const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/map:
 *   get:
 *     summary: Проверка, что API карты работает
 *     description: Проверка, что API карты работает
 *     tags: [Map]
 *     responses:
 *       200:
 *         description: Success
 */
router.route('/').get((req, res) => {
    res.send([
     {
       data: "API карт работает",
     }
    ])
});

/**
 * @swagger
 * /api/map/client/{clientId}:
 *   get:
 *     summary: Получить информацию о клиенте
 *     description: Получить информацию о клиенте
 *     tags: [Map]
 *     parameters:
 *      - name: clientId
 *        description: Уникальный идентификатор клиента
 *        in: path
 *        required: true
 *        type: string
 *     responses:
 *       200:
 *         description: Ok
 */
router.route('/client/:clientId').get((req, res) => {
    console.log(req.params);
    res.send([
     {
       id: `${req.params.clientId}`,
       title: "РГПУ5",
     }
    ])
});


module.exports = router;
