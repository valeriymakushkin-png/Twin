/**
 * Короткий случайный идентификатор записи (хватает для локальной базы одного пользователя).
 * `crypto.randomUUID` есть только на https/localhost, а `getRandomValues` — везде, поэтому используем его: приложение
 * не должно падать при создании поездки, если его открыли по обычному http (например, из локальной сети при проверке).
 */
export const newId = (): string => {
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
};
