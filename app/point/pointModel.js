//app/point/pointModel.js
//https://habr.com/ru/articles/565062/

/**
 * @swagger
 * definitions:
 *   Error:
 *     type: object
 *     properties:
 *       status:
 *         type: integer
 *         description: HTTP-код ошибки 
 *         example: 404
 *       error:
 *         type: string
 *         description: Текст ошибки
 *         example: Точка не найдена
 *       stack:
 *         type: string
 *         description: Стэк вызовов
 *         example: ...
 *   PointBody:
 *     type: object
 *     properties:
 *       project_id:
 *         type: string
 *         description: Идентификатор проекта
 *         example: 1
 *       longitude:
 *         type: float
 *         description: Широта
 *         example: 59.934565
 *       latitude:
 *         type: float
 *         description: Долгота
 *         example: 30.319476
 *       names:
 *         type: object
 *         properties:
 *           ru:
 *             type: string
 *             description: Описание на русском языке
 *             example: Учебное здание
 *           en:
 *             type: string
 *             description: Описание на английском языке
 *             example: Education building
 *           zh:
 *             type: string
 *             description: Описание на китайском языке
 *             example: 文教建筑
 *       descriptions:
 *         type: object
 *         properties:
 *           ru:
 *             type: string
 *             description: Описание на русском языке
 *             example: Учебное здание
 *           en:
 *             type: string
 *             description: Описание на английском языке
 *             example: Education building
 *           zh:
 *             type: string
 *             description: Описание на китайском языке
 *             example: 文教建筑             
 *       type_id:
 *         type: integer
 *         description: Тип
 *         example: 2
 *       status_id:
 *         type: integer
 *         description: Статус
 *         example: 0
 *       web:
 *         type: string
 *         description: Адрес описания в сети
 *         example: https://yandex.ru/maps/-/CDfDmP88
 *       photos:
 *         type: array
 *         items:
 *           type: string
 *           description: Адрес фото в сети
 *           example: https://yandex.ru/maps/-/CDfDmP88
 *       videos:
 *         type: array
 *         items:
 *           type: string
 *           description: Адрес видео в сети
 *           example: https://yandex.ru/maps/-/CDfDmP88 
 *   Point:
 *    allOf:
 *     - $ref: '#/definitions/PointBody'
 *     - type: object
 *       properties:
 *         id:
 *          type: uuid
 *          description: Идентификатор точки
 *          example: b6c5f523-206f-42d3-b9fa-f29808b41d39  
 *   Points:
 *     type: object
 *     properties:
 *       count:
 *         type: integer
 *         description: Количество записей в ответе
 *         example: 5
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Point' 
 */


const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');

const Point = sequelize.define(
  'Point',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    longitude: {
      type: DataTypes.DOUBLE
    },
    latitude: {
      type: DataTypes.DOUBLE
    },
    names: {
      type: DataTypes.JSONB
    },
    descriptions: {
      type: DataTypes.JSONB
    },
    type_id: {
      type: DataTypes.INTEGER	    
    },
    status_id: {
      type: DataTypes.INTEGER
    },
    web: {
      type: DataTypes.TEXT,
      validate: { isUrl: true }
    },
    picture: {
      type: DataTypes.TEXT,
      validate: { isUrl: true }
    },
    photos: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    videos: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    project_id: {
      type: DataTypes.TEXT
    }
  },
  {
    // Здесь определяются другие настройки модели
    tableName: 'point'
  }
)

async function updateDbTables() {
  try {
    await Point.sync({ alter: true })
  } catch (e) {
    console.log('Таблица для модели `Point` не обновлена.', e)
  }
}
updateDbTables();

module.exports = Point;

