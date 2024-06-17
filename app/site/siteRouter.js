const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/site/1:
 *   get:
 *     summary: Получить информацию о клиенте
 *     description: Получить информацию о клиенте
 *     tags: [Site]
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

router.route('/1').get((req, res) => {
  res.send([
    {
      name: "Site router",
    }
  ])
});

module.exports = router;
