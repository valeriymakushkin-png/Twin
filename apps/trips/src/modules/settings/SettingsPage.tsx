import { useEffect, useRef, useState } from 'react';
import { NetPill } from '../../App';
import { BackupError, BACKUP_EXTENSION, createBackup, needsPassword, restoreBackup } from '../../core/backup';
import { db } from '../../core/db';
import { saveFile } from '../../core/files';
import { setTheme, useTheme, type ThemeChoice } from '../../core/theme';
import { fill, ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Field, Icon, Sheet } from '../../core/ui';
import { MIN_PIN } from '../documents/DocumentsTab';
import { RatesPanel } from '../expenses/RatesPanel';
import { useVault } from '../documents/vault';

const mb = (n: number) => (n < 1024 * 1024 ? `${Math.max(1, Math.round(n / 1024))} КБ` : n < 1024 ** 3 ? `${(n / 1024 / 1024).toFixed(1)} МБ` : `${(n / 1024 ** 3).toFixed(1)} ГБ`);

function useStorage() {
  const [info, setInfo] = useState<{ used: number; quota: number; persisted: boolean } | null>(null);
  useEffect(() => {
    void (async () => {
      try {
        const e = await navigator.storage?.estimate?.();
        const persisted = (await navigator.storage?.persisted?.()) ?? false;
        if (e?.usage !== undefined && e.quota) setInfo({ used: e.usage, quota: e.quota, persisted });
      } catch {
        /* браузер не отдаёт сведения о памяти */
      }
    })();
  }, []);
  return info;
}

export function SettingsPage() {
  const theme = useTheme();
  const vault = useVault();
  const storage = useStorage();
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [restoreBytes, setRestoreBytes] = useState<Uint8Array | null>(null);
  const [restorePassword, setRestorePassword] = useState('');
  const [restoreError, setRestoreError] = useState('');
  const [pinSheet, setPinSheet] = useState(false);
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [pinError, setPinError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const exportBackup = async () => {
    setBusy(true);
    try {
      const bytes = await createBackup(db, { password: password || undefined });
      const stamp = new Date().toISOString().slice(0, 10);
      await saveFile(bytes, `vylo-${stamp}${BACKUP_EXTENSION}`);
      toast(ru.settings.backupDone);
    } catch {
      toast(ru.saveFailed, 'error');
    } finally {
      setBusy(false);
    }
  };

  const tryRestore = async (bytes: Uint8Array, pass?: string) => {
    setBusy(true);
    try {
      const s = await restoreBackup(db, bytes, pass);
      setRestoreBytes(null);
      setRestorePassword('');
      toast(fill(ru.settings.backupRestored, { ...s }));
    } catch (e) {
      const code = e instanceof BackupError ? e.code : 'invalid';
      if (code === 'wrong-password' || code === 'password-required') setRestoreError(ru.settings.errors[code]);
      else {
        setRestoreBytes(null);
        toast(ru.settings.errors[code], 'error');
      }
    } finally {
      setBusy(false);
    }
  };

  const onPickBackup = async (file: File | undefined) => {
    if (!file) return;
    if (!window.confirm(ru.settings.backupImportWarn)) return;
    const bytes = new Uint8Array(await file.arrayBuffer());
    setRestoreError('');
    if (needsPassword(bytes)) setRestoreBytes(bytes);
    else await tryRestore(bytes);
  };

  const submitPin = async () => {
    setPinError('');
    if (newPin.length < MIN_PIN) return setPinError(ru.docs.pinShort);
    if (!(await vault.changePin(oldPin, newPin))) return setPinError(ru.docs.wrongPin);
    toast(ru.docs.pinChanged);
    setPinSheet(false);
    setOldPin('');
    setNewPin('');
  };

  const themes: [ThemeChoice, string][] = [
    ['system', ru.settings.themeSystem],
    ['light', ru.settings.themeLight],
    ['dark', ru.settings.themeDark],
  ];

  return (
    <>
      <header className="topbar">
        <h1>{ru.settings.title}</h1>
        <NetPill />
      </header>
      <main className="content">
        <section className="section">
          <h3>{ru.settings.theme}</h3>
          <div className="segmented" style={{ marginTop: 10 }} role="group" aria-label={ru.settings.theme}>
            {themes.map(([value, label]) => (
              <button key={value} type="button" aria-pressed={theme === value} onClick={() => setTheme(value)}>
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="section">
          <h3 style={{ marginBottom: 8 }}>{ru.settings.rates}</h3>
          <RatesPanel />
        </section>

        <section className="section">
          <h3>{ru.settings.backupTitle}</h3>
          <p className="muted" style={{ marginBottom: 12 }}>{ru.settings.backupText}</p>
          <Field label={ru.settings.backupPassword} hint={ru.settings.backupPasswordHint}>
            <input className="input" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Field>
          <Button className="btn-block" onClick={exportBackup} disabled={busy}>
            <Icon name="download" /> {ru.settings.backupExport}
          </Button>
          <input ref={fileRef} type="file" hidden onChange={(e) => (void onPickBackup(e.target.files?.[0]), (e.target.value = ''))} />
          <Button className="btn-block" variant="secondary" onClick={() => fileRef.current?.click()} disabled={busy}>
            <Icon name="upload" /> {ru.settings.backupImport}
          </Button>
        </section>

        {vault.status !== 'none' && vault.status !== 'loading' && (
          <section className="section">
            <h3>{ru.docs.title}</h3>
            <Button className="btn-block" variant="secondary" style={{ marginTop: 10 }} onClick={() => setPinSheet(true)}>
              <Icon name="lock" /> {ru.docs.changePin}
            </Button>
          </section>
        )}

        <section className="section">
          <h3>{ru.settings.storage}</h3>
          {storage ? (
            <>
              <p className="muted">{fill(ru.settings.storageUsed, { used: mb(storage.used), quota: mb(storage.quota) })}</p>
              <p className="muted" style={{ marginTop: 4 }}>{storage.persisted ? ru.settings.storagePersistent : ru.settings.storageNotPersistent}</p>
            </>
          ) : (
            <p className="muted">—</p>
          )}
        </section>

        <section className="section">
          <h3>{ru.settings.privacyTitle}</h3>
          <p className="muted">{ru.settings.privacy}</p>
          <p className="muted" style={{ marginTop: 10 }}>
            {ru.settings.version}: 0.3.0 (этап 3)
          </p>
        </section>

        <section className="section">
          <h3>{ru.settings.sourcesTitle}</h3>
          <ul className="sources">
            {ru.settings.sources.map((x) => (
              <li key={x.name}>
                <a href={x.url} target="_blank" rel="noopener noreferrer">
                  {x.name}
                </a>
                <span className="muted"> — {x.what}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Sheet
        open={!!restoreBytes}
        onClose={() => (setRestoreBytes(null), setRestorePassword(''))}
        title={ru.settings.backupImport}
        footer={
          <Button className="btn-block" disabled={busy || !restorePassword} onClick={() => restoreBytes && void tryRestore(restoreBytes, restorePassword)}>
            {ru.settings.backupImport}
          </Button>
        }
      >
        <Field label={ru.settings.backupPasswordNeeded} error={restoreError}>
          <input className="input" type="password" value={restorePassword} onChange={(e) => setRestorePassword(e.target.value)} autoFocus />
        </Field>
      </Sheet>

      <Sheet
        open={pinSheet}
        onClose={() => setPinSheet(false)}
        title={ru.docs.changePin}
        footer={
          <Button className="btn-block" onClick={() => void submitPin()} disabled={!oldPin || !newPin}>
            {ru.save}
          </Button>
        }
      >
        <Field label={ru.docs.oldPin}>
          <input className="input" type="password" autoComplete="current-password" value={oldPin} onChange={(e) => setOldPin(e.target.value)} />
        </Field>
        <Field label={ru.docs.newPin} hint={ru.docs.pinHint} error={pinError}>
          <input className="input" type="password" autoComplete="new-password" value={newPin} onChange={(e) => setNewPin(e.target.value)} />
        </Field>
      </Sheet>
    </>
  );
}
