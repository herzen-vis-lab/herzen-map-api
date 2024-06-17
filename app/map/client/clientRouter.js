const express = require('express');
const clientRouter = express.Router();

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
*       '200':
*         description: Ok
*         schema:
*           $ref: '#/definitions/Client'
*/

router.route('/client/:clientId').get((req, res) => {
    console.log(req.params);
    res.send([
     {
       id: `${req.params.clientId}`,
       title: "РГПУ",
     }
    ])
});

module.exports = router;
