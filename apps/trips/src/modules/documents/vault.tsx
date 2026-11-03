import { useLiveQuery } from 'dexie-react-hooks';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { changePin, getVaultParams, resetVault, setupVault, unlock } from './docRepo';

/**
 * «Сейф»: хранит ключ документов в памяти, пока он открыт, и сам запирается — через минуту после сворачивания
 * приложения и через 5 минут бездействия. Ключ никогда не записывается на диск.
 */
export type VaultStatus = 'loading' | 'none' | 'locked' | 'unlocked';

interface VaultApi {
  status: VaultStatus;
  dek: CryptoKey | null;
  setup: (pin: string) => Promise<void>;
  unlock: (pin: string) => Promise<boolean>;
  lock: () => void;
  reset: () => Promise<void>;
  changePin: (oldPin: string, newPin: string) => Promise<boolean>;
}

const Ctx = createContext<VaultApi | null>(null);

const BACKGROUND_LOCK_MS = 60_000;
const IDLE_LOCK_MS = 5 * 60_000;

/** «Отпечаток» сейфа: меняется, когда сейф создан заново, PIN сменён или копия подменила данные. */
const fingerprintOf = (p: { salt: Uint8Array } | null | undefined) => (p ? Array.from(p.salt).join(',') : 'none');

export function VaultProvider({ children }: { children: ReactNode }) {
  // undefined — ещё читаем базу, null — сейфа нет, иначе параметры сейфа.
  const params = useLiveQuery(async () => (await getVaultParams()) ?? null, []);
  // Ключ запоминается вместе с отпечатком сейфа, для которого он получен. Если сейф подменили (восстановление из
  // копии, сброс), старый ключ автоматически перестаёт считаться действующим и сейф выглядит запертым.
  const [held, setHeld] = useState<{ key: CryptoKey; fp: string } | null>(null);
  const fp = params === undefined ? 'loading' : fingerprintOf(params);
  const dek = held && held.fp === fp ? held.key : null;
  const lock = useCallback(() => setHeld(null), []);

  const hiddenAt = useRef(0);
  useEffect(() => {
    if (!dek) return;
    let idle = setTimeout(lock, IDLE_LOCK_MS);
    const bump = () => {
      clearTimeout(idle);
      idle = setTimeout(lock, IDLE_LOCK_MS);
    };
    const onVisibility = () => {
      if (document.hidden) hiddenAt.current = Date.now();
      else if (Date.now() - hiddenAt.current > BACKGROUND_LOCK_MS) lock();
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pointerdown', bump);
    window.addEventListener('keydown', bump);
    return () => {
      clearTimeout(idle);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointerdown', bump);
      window.removeEventListener('keydown', bump);
    };
  }, [dek, lock]);

  const api = useMemo<VaultApi>(
    () => ({
      status: params === undefined ? 'loading' : params === null ? 'none' : dek ? 'unlocked' : 'locked',
      dek,
      setup: async (pin) => {
        const key = await setupVault(pin);
        setHeld({ key, fp: fingerprintOf(await getVaultParams()) });
      },
      unlock: async (pin) => {
        const key = await unlock(pin);
        if (key) setHeld({ key, fp: fingerprintOf(await getVaultParams()) });
        return !!key;
      },
      lock,
      reset: async () => {
        await resetVault();
        setHeld(null);
      },
      changePin: async (oldPin, newPin) => {
        const ok = await changePin(oldPin, newPin);
        // Ключ документов остался прежним, меняется только его «обёртка» — поэтому открытый сейф остаётся открытым.
        if (ok && held) setHeld({ key: held.key, fp: fingerprintOf(await getVaultParams()) });
        return ok;
      },
    }),
    [params, dek, held, lock],
  );
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useVault(): VaultApi {
  const v = useContext(Ctx);
  if (!v) throw new Error('VaultProvider отсутствует');
  return v;
}
