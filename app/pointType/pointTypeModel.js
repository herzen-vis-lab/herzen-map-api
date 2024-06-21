//app/pointType/pointTypeModel.js

/**
 * @swagger
 * definitions:
 *   Names:
 *     type
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
 *             example: 文教建筑物
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

