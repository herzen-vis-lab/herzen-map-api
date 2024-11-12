const { Sequelize } = require('sequelize');

const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT;
const user = process.env.POSTGRES_USER;
const pass = process.env.POSTGRES_PASSWORD;
const dbname = process.env.POSTGRES_DBNAME;
const sequelize = new Sequelize(`postgres://${user}:${pass}@${host}:${port}/${dbname}`, {logging: false}); //если нужно, можно включить

async function checkDb() {
  try {
    await sequelize.authenticate()
    //console.log('Соединение с БД было успешно установлено')
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
  }
}

checkDb();

module.exports = sequelize;
