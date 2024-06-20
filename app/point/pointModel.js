//app/point/pointModel.js
//https://habr.com/ru/articles/565062/

/**
 * @swagger
 * definitions:
 *   Point:
 *     type: object
 *     required:
 *       - id
 *     properties:
 *       id:
 *         type: uuid
 *         description: Point id
 *       longitude:
 *         type: float
 *         description: Point longitude 
 *       latitude:
 *         type: float
 *         description: Point latitude
 *       name:
 *         type: array
 *         items: 
 *           type: string
 *       type_id:
 *         type: integer
 *         description: Point type
 *   Points:
 *     type: items
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
      defaultValue: sequelize.UUIDV4 
    },
    longitude: {
      type: DataTypes.DOUBLE
    },
    latitude: {
      type: DataTypes.DOUBLE
      // allowNull по умолчанию имеет значение true
    },
    name: {
      type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.TEXT))
    },
    name_jsonb: {
      type: DataTypes.JSONB
    },
    type_id: {
      type: DataTypes.INTEGER	    
    }	    
  },
  {
    // Здесь определяются другие настройки модели
    tableName: 'point'
  }
)

async function updateDbTables() {
  try {
    await Point.sync({ force: true })
    console.log('Таблица для модели `User` только что была создана заново!')
  } catch (e) {
    console.log('Таблица для модели `User` не обновлена.', e)
  }
}
updateDbTables();

module.exports = Point;

