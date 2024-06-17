const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const mapRouter = require('./app/map/mapRouter');
const siteRouter = require('./app/site/siteRouter');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Technopark API",
      version: '1.0.0',
    },
  },
  apis: ["server.js", "./app/*/*.js", "./app/*/*/*.js" ], // Paths where JSDoc is present
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * tags:
 *   - name: Map
 *     description: API карт
 *   - name: Site
 *     description: API сайта
 */

app.use('/api/map', mapRouter);
//app.get('/api/map', (req, res) => {
//  res.send("<h2>API карты работает!</h2>");
//});

/**
 * @swagger
 * /api/site:
 *   get:
 *     summary: Проверка, что API сайта работает
 *     description: Проверка, что API сайта работает
 *     tags: [Site]
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/api/site', (req, res) => {
  res.send("<h2>API сайта работает!</h2>");
});

const PORT = 3000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT);
