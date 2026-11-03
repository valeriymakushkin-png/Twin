import { useEffect, useState } from 'react';

/** Короткие всплывающие сообщения («Сохранено», ошибки). Без библиотек: простая подписка на события. */
type Toast = { id: number; text: string; kind: 'ok' | 'error' };
const listeners = new Set<(t: Toast) => void>();
let counter = 0;

export const toast = (text: string, kind: Toast['kind'] = 'ok') => {
  const t = { id: ++counter, text, kind };
  listeners.forEach((l) => l(t));
};

export function Toaster() {
  const [current, setCurrent] = useState<Toast | null>(null);
  useEffect(() => {
    const on = (t: Toast) => setCurrent(t);
    listeners.add(on);
    return () => void listeners.delete(on);
  }, []);
  useEffect(() => {
    if (!current) return;
    const timer = setTimeout(() => setCurrent(null), current.kind === 'error' ? 5000 : 2600);
    return () => clearTimeout(timer);
  }, [current]);
  return current ? (
    <div className={`toast ${current.kind === 'error' ? 'error' : ''}`} role="status" aria-live="polite">
      {current.text}
    </div>
  ) : null;
}
