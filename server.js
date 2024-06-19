//server.js
const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const apiRouter = require('./app/apiRouter');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Technopark API",
      version: '1.0.0',
    },
  },
  apis: ["server.js", "./app/*.js", "./app/*/*.js" ], // Paths where JSDoc is present
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * tags:
 *   - name: Point
 *     description: Точки
 *   - name: Point type
 *     description: Типы точек
 */

app.use('/api', apiRouter);

const PORT = 3000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT);
