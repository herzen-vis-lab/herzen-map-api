//app/point/pointModel.js
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
 *       changedAt:
 *         type: string
 *         format: date
 *         description: The date the Point was changed
 *   Points:
 *     type: items
 *     items: 
 *       $ref: '#/definitions/Point' 
 */ 
