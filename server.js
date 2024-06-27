//server.js
const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const apiRouter = require('./app/apiRouter');
const sequelize = require('./app/sequelize');

// Блок swagger
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

// Получаем возможность работы с body
app.use(express.json());

// Проверка работоспособности
app.get('/', (req, res) => {
  res.json({'message':'API работает, Адрес swagger /api/docs.'})
});

// Роутинг
app.use('/api', apiRouter);

// Конфиг порта
const PORT = 3001;
app.listen(PORT);
console.log(`server listen on port ${PORT}`); 

// Для тестирования
module.exports = app;
