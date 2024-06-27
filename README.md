# map-api
Контейнер слушает внутренний порт 3001 и использует следующие переменные окружения:
* POSTGRES_HOST=...
* POSTGRES_PORT=5432
* POSTGRES_USER=...
* POSTGRES_PASSWORD=...
* POSTGRES_DBNAME=map

Сваггер доступен по адресу /api/docs

Коды ответов:
* 200 — ответ успешный, читаем ожидаемый ответ
* 400 — ответ не успешный, и сервис гарантирует, что ретраи будут возвращать тоже самое;
ошибки валидации, ошибки доступа, ошибки роутинга;
* 500 — ответ не успешный, но клиенту возможно имеет смысл ретрайнуть запрос пару раз через некоторое время.

Тесты (jest) запускаются по команде npm start.

Что почитать:
* Tutorial on automatically generating & serving swagger-ui documentation based on jsdocs.
https://github.com/kriscfoster/express-swagger-docs/tree/master
* Node.js, Express и MongoDB: API за полчаса
https://habr.com/ru/companies/ruvds/articles/321104/
* Создаем наш первый API при помощи Node.js и Express: Создаем сервер
https://code.tutsplus.com/ru/code-your-first-api-with-nodejs-and-express-set-up-the-server--cms-31698t
* Как построить REST API с помощью JS, Node.js и Express.js
https://nodejsdev.ru/guides/rest-api-design/#_1
* How to structure an Express.js REST API with best practices
https://blog.treblle.com/egergr/
* Advanced Routing Using Express: Node.js
https://technotip.com/3775/advanced-routing-using-express-node-js/
* Express
https://expressjs.com/ru/
*Building a Node API with API-first design
https://blog.treblle.com/building-a-node-api-with-api-first-design/
* Generating Swagger documentation for an Express API
https://julioolvr.github.io/b/2016/10/15/express-api-swagger/
*This is just a simple CRUD API of Books made with Express.
https://github.com/ganeshmani/swagger-nodejs-tutorial
* How to Document an Express API with Swagger UI and JSDoc
https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do
*Setting Up Swagger to API Test In a JavaScript Application
https://www.paigeniedringhaus.com/blog/setting-up-swagger-to-api-test-in-a-java-script-application
* SwaggerUI and Advanced OpenAPI usecases
https://knotx.io/tutorials/openapi-and-swagger-ui/2_0/
