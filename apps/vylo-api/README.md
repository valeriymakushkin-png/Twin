# Vylo API

Сервер для админ-панели Vylo: аккаунты команды с ролями, публикация правок каталога для всех пользователей,
журнал изменений с отменой и загрузка фото. Node 22, встроенный SQLite (`node:sqlite`), без внешних зависимостей.

## Запуск

```bash
pnpm --filter @vylo/api dev     # http://localhost:4300, данные в apps/vylo-api/data/
pnpm --filter @vylo/api test    # интеграционные тесты
```

Приложение подключается к серверу при сборке:

```bash
NEXT_PUBLIC_VYLO_API=https://api.example.com pnpm --filter @vylo/app build
```

Откройте `/admin/` в приложении: при первом входе создаётся аккаунт **владельца** (нужен ключ `VYLO_SETUP_TOKEN`).

## Переменные окружения

| Переменная | Назначение |
|---|---|
| `VYLO_SECRET` | Секрет подписи сессий, ≥ 32 символов (обязателен в production) |
| `VYLO_SETUP_TOKEN` | Ключ для создания первого аккаунта владельца |
| `VYLO_ALLOWED_ORIGINS` | Адреса приложения через запятую (CORS для админки); каталог `GET /content` открыт всем |
| `VYLO_PUBLIC_URL` | Публичный адрес API — для ссылок на загруженные фото |
| `VYLO_DB`, `VYLO_UPLOADS` | Путь к базе SQLite и папке с фото (по умолчанию `data/`) |
| `PORT` | Порт (4300) |

## Роли

| Роль | Права |
|---|---|
| Владелец | Всё; назначает администраторов; может передать права владельца |
| Администратор | Команда (редакторы и модераторы), настройки, журнал и отмена изменений, импорт |
| Редактор | Места, города, страны, координаты, тексты, фото |
| Модератор | Скрывает и показывает отзывы и встречи |

Смена роли, отключение или сброс пароля сразу завершают все сессии участника. Пароли хранятся в виде scrypt-хешей,
вход ограничен 10 попытками в минуту с одного адреса.

## API

`GET /content` (публично) · `PUT|DELETE /content/:kind/:id` · `PUT /content/settings` · `PUT /content` (импорт) ·
`POST /auth/setup|login|password|logout-all` · `GET /auth/me` · `GET|POST /users` · `PATCH|DELETE /users/:id` ·
`POST /users/:id/reset-password` · `POST /owner/transfer` · `GET /audit` · `POST /audit/:id/revert` ·
`POST /uploads` (jpeg/png/webp/avif до 8 МБ) · `GET /uploads/:file`.

Для production поставьте сервер за HTTPS-прокси (nginx, Caddy) и делайте резервные копии папки `data/`.
