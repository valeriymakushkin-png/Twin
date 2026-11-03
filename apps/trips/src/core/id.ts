/** Короткий случайный идентификатор записи (хватает для локальной базы одного пользователя). */
export const newId = (): string => crypto.randomUUID().replace(/-/g, '').slice(0, 16);
