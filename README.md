# herzen-map-api
Контейнер слушает внутренний порт 3001, должен быть доступен по протоколу https внутри сети.
Использует следующие переменные окружения:
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
