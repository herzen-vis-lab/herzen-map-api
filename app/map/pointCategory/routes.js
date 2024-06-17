const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/map/client/pointCategory:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */

router.route('/:clientId').get((req, res) => {
    console.log(req.params);
    res.send(`<h2>Hello from ${req.params.toString()}</h2>`);
});

module.exports = router;
