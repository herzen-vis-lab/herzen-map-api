//app/pointType/pointTypeModel.js

/**
 * @swagger
 * definitions:
 *   PointType:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: Идентификатор
 *         example: 2
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
 *             example: Учебное здание
 *       icon:
 *         type: string
 *         description: Иконка
 *         example: islands#blueLeisureIcon 
 *   PointTypes:
 *     type: array
 *     items:
 *       $ref: '#/definitions/PointType' 
 */

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');

const PointType = sequelize.define(
  'Point',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    names: {
      type: DataTypes.JSONB
    },
    icon: {
      type: DataTypes.TEXT
    },
  },
  {
    // Здесь определяются другие настройки модели
    tableName: 'point_type'
  }
)

async function updateDbTables() {
  try {
    await PointType.sync({ alter: true })
    console.log('Таблица для модели `PointType` только что была создана заново!')
  } catch (e) {
    console.log('Таблица для модели `PointType` не обновлена.', e)
  }
}
updateDbTables();

module.exports = PointType;

