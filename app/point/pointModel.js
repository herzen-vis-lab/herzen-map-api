//app/point/pointModel.js
//https://habr.com/ru/articles/565062/

/**
 * @swagger
 * definitions:
 *   PointBody:
 *     type: object
 *     properties:
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
 *           language:
 *             type: string
 *             description: Язык описания
 *             example: ru
 *           text:
 *             type: string
 *             description: Описание
 *             example: Старый сад
 *       descriptions:
 *         type: object
 *         properties:
 *           language:
 *             type: string
 *             description: Язык описания
 *             example: ru
 *           text:
 *             type: string
 *             description: Описание
 *             example: Старый сад
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
 *     type: array
 *     items:
 *       $ref: '#/definitions/Point' 
 */


const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');

const Point = sequelize.define(
  'Point',
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
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
      type: DataTypes.TEXT
    },
    photos: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    videos: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
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
    console.log('Таблица для модели `Point` только что была создана заново!')
  } catch (e) {
    console.log('Таблица для модели `Point` не обновлена.', e)
  }
}
updateDbTables();

module.exports = Point;

