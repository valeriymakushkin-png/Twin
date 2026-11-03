import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useRef, useState } from 'react';
import { type DocKind, type Trip } from '../../core/db';
import { useObjectUrl } from '../../core/hooks';
import { fill, ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Empty, Field, Icon, IconButton, Sheet } from '../../core/ui';
import { addDocument, deleteDocument, listDocuments, readDocument, updateDocumentMeta, type DocView } from './docRepo';
import { useVault } from './vault';

export const MIN_PIN = 6;
const KINDS: DocKind[] = ['ticket', 'booking', 'insurance', 'passport', 'other'];
const KIND_ICON = { ticket: 'file', booking: 'calendar', insurance: 'check', passport: 'lock', other: 'file' } as const;

const formatSize = (n: number) => (n < 1024 * 1024 ? `${Math.max(1, Math.round(n / 1024))} КБ` : `${(n / 1024 / 1024).toFixed(1)} МБ`);

/** Экран входа в сейф: создание PIN (первый раз) или ввод PIN. После нескольких ошибок подряд вводится пауза. */
export function VaultGate() {
  const vault = useVault();
  const [pin, setPin] = useState('');
  const [again, setAgain] = useState('');
  const [error, setError] = useState('');
  const [fails, setFails] = useState(0);
  const [waitUntil, setWaitUntil] = useState(0);
  const [busy, setBusy] = useState(false);
  const [showReset, setShowReset] = useState(false);

  // Шифрование (Web Crypto) браузер включает только на https и localhost; по обычному http с телефона его нет.
  if (typeof crypto === 'undefined' || !crypto.subtle) return <p className="field-error" style={{ padding: 20 }}>{ru.docs.insecure}</p>;
  if (vault.status === 'loading') return <p className="muted" style={{ textAlign: 'center', padding: 30 }}>{ru.loading}</p>;
  const creating = vault.status === 'none';

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Date.now() < waitUntil) return;
    setError('');
    if (creating) {
      if (pin.length < MIN_PIN) return setError(ru.docs.pinShort);
      if (pin !== again) return setError(ru.docs.pinMismatch);
    }
    setBusy(true);
    try {
      if (creating) await vault.setup(pin);
      else if (!(await vault.unlock(pin))) {
        const n = fails + 1;
        setFails(n);
        if (n >= 3) setWaitUntil(Date.now() + Math.min(n * 2000, 20000));
        setError(ru.docs.wrongPin);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="gate" onSubmit={submit}>
      <div className="empty-icon">
        <Icon name="lock" size={30} />
      </div>
      <h3>{creating ? ru.docs.setupTitle : ru.docs.unlockTitle}</h3>
      <p>{creating ? ru.docs.setupText : ru.docs.intro}</p>
      <div style={{ textAlign: 'left', maxWidth: 360, margin: '0 auto' }}>
        <Field label={ru.docs.pin} hint={creating ? ru.docs.pinHint : undefined} error={creating ? undefined : error}>
          <input className="input" type="password" inputMode="text" autoComplete={creating ? 'new-password' : 'current-password'} value={pin} onChange={(e) => setPin(e.target.value)} autoFocus />
        </Field>
        {creating && (
          <Field label={ru.docs.pinConfirm} error={error}>
            <input className="input" type="password" autoComplete="new-password" value={again} onChange={(e) => setAgain(e.target.value)} />
          </Field>
        )}
        <Button type="submit" className="btn-block" disabled={busy || !pin}>
          {creating ? ru.docs.create : ru.docs.unlock}
        </Button>
      </div>
      {!creating && (
        <p style={{ marginTop: 18 }}>
          <button type="button" className="btn btn-ghost" onClick={() => setShowReset(true)}>
            {ru.docs.resetVault}
          </button>
        </p>
      )}
      <Sheet open={showReset} onClose={() => setShowReset(false)} title={ru.docs.resetVault}>
        <p className="muted" style={{ marginBottom: 14 }}>{ru.docs.resetVaultText}</p>
        <Button
          variant="danger"
          className="btn-block"
          onClick={async () => {
            if (!window.confirm(ru.docs.resetVaultConfirm)) return;
            await vault.reset();
            setShowReset(false);
            setPin('');
            setFails(0);
          }}
        >
          {ru.docs.resetVaultConfirm.replace('?', '')}
        </Button>
      </Sheet>
    </form>
  );
}

/** Просмотр документа: расшифровывается на лету, в память, и показывается без интернета. */
function DocViewer({ doc, dek, onClose }: { doc: DocView | null; dek: CryptoKey; onClose: () => void }) {
  const [blob, setBlob] = useState<Blob | null>(null);
  const [failed, setFailed] = useState(false);
  const [name, setName] = useState('');
  const [kind, setKind] = useState<DocKind>('other');
  const url = useObjectUrl(blob);

  useEffect(() => {
    setBlob(null);
    setFailed(false);
    if (!doc) return;
    setName(doc.name);
    setKind(doc.kind);
    readDocument(dek, doc.id).then(setBlob, () => setFailed(true));
  }, [doc, dek]);

  if (!doc) return null;
  const isImage = doc.mime.startsWith('image/');
  const isPdf = doc.mime === 'application/pdf';
  const dirty = name.trim() !== doc.name || kind !== doc.kind;

  return (
    <Sheet
      open
      onClose={onClose}
      title={doc.name}
      footer={
        <>
          <Button
            variant="danger"
            aria-label={ru.delete}
            onClick={async () => {
              if (!window.confirm(fill(ru.docs.deleteConfirm, { name: doc.name }))) return;
              await deleteDocument(doc.id);
              onClose();
            }}
          >
            <Icon name="trash" />
          </Button>
          {url && (
            <a className="btn btn-secondary" href={url} download={doc.name} style={{ flex: 1, textDecoration: 'none', color: 'inherit' }}>
              <Icon name="download" /> {ru.docs.download}
            </a>
          )}
          {url && (
            <a className="btn btn-primary" href={url} target="_blank" rel="noreferrer" style={{ flex: 1, textDecoration: 'none' }}>
              {ru.docs.open}
            </a>
          )}
        </>
      }
    >
      {failed && <p className="field-error">{ru.docs.decryptFailed}</p>}
      {!blob && !failed && <p className="muted">{ru.loading}</p>}
      {url && isImage && <img className="viewer-img" src={url} alt={doc.name} />}
      {url && isPdf && <iframe className="viewer" src={url} title={doc.name} />}
      {url && !isImage && !isPdf && <p className="muted">{ru.docs.previewUnavailable}</p>}
      <div style={{ marginTop: 16 }}>
        <Field label={ru.docs.name}>
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} maxLength={120} />
        </Field>
        <Field label={ru.docs.kindLabel}>
          <select className="input" value={kind} onChange={(e) => setKind(e.target.value as DocKind)}>
            {KINDS.map((k) => (
              <option key={k} value={k}>
                {ru.docs.kinds[k]}
              </option>
            ))}
          </select>
        </Field>
        {dirty && (
          <Button
            variant="secondary"
            onClick={async () => {
              await updateDocumentMeta(dek, doc.id, { name, kind });
              toast(ru.saved);
              onClose();
            }}
          >
            {ru.save}
          </Button>
        )}
      </div>
    </Sheet>
  );
}

function AddDocuments({ files, tripId, dek, onClose }: { files: File[]; tripId: string; dek: CryptoKey; onClose: () => void }) {
  const [kind, setKind] = useState<DocKind>('ticket');
  const [names, setNames] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  useEffect(() => setNames(files.map((f) => f.name)), [files]);
  return (
    <Sheet
      open={files.length > 0}
      onClose={onClose}
      title={ru.docs.add}
      footer={
        <Button
          className="btn-block"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            try {
              for (const [i, f] of files.entries()) await addDocument(dek, tripId, f, { name: names[i]?.trim() || f.name, kind });
              // Просим систему не выселять данные при нехватке места — документы важнее кэша браузера.
              void navigator.storage?.persist?.();
              toast(ru.saved);
              onClose();
            } catch {
              toast(ru.saveFailed, 'error');
            } finally {
              setBusy(false);
            }
          }}
        >
          {ru.save}
        </Button>
      }
    >
      <Field label={ru.docs.kindLabel}>
        <select className="input" value={kind} onChange={(e) => setKind(e.target.value as DocKind)}>
          {KINDS.map((k) => (
            <option key={k} value={k}>
              {ru.docs.kinds[k]}
            </option>
          ))}
        </select>
      </Field>
      {files.map((f, i) => (
        <Field key={i} label={`${ru.docs.name} (${formatSize(f.size)})`}>
          <input className="input" value={names[i] ?? ''} onChange={(e) => setNames((l) => l.map((x, k) => (k === i ? e.target.value : x)))} maxLength={120} />
        </Field>
      ))}
    </Sheet>
  );
}

export function DocumentsTab({ trip }: { trip: Trip }) {
  const vault = useVault();
  const dek = vault.dek;
  // Список зависит от базы: useLiveQuery перечитает документы при любом изменении таблицы docs.
  const docs = useLiveQuery(async () => (dek ? listDocuments(dek, trip.id) : []), [dek, trip.id]);
  const [picked, setPicked] = useState<File[]>([]);
  const [viewing, setViewing] = useState<DocView | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  if (vault.status !== 'unlocked' || !dek) return <VaultGate />;

  return (
    <>
      <div className="menu-row" style={{ marginBottom: 12 }}>
        <input ref={fileRef} type="file" multiple hidden onChange={(e) => (setPicked(Array.from(e.target.files ?? [])), (e.target.value = ''))} />
        <Button onClick={() => fileRef.current?.click()} style={{ flex: 1 }}>
          <Icon name="plus" /> {ru.docs.add}
        </Button>
        <IconButton icon="lock" label={ru.docs.lock} onClick={vault.lock} />
      </div>
      {docs && docs.length === 0 && <Empty icon="file" title={ru.docs.empty} text={ru.docs.emptyText} />}
      {docs?.map((d) => (
        <button key={d.id} type="button" className="doc" onClick={() => setViewing(d)}>
          <span className="doc-icon">
            <Icon name={KIND_ICON[d.kind]} />
          </span>
          <span className="doc-main">
            <b>{d.name}</b>
            <small>
              {ru.docs.kinds[d.kind]} · {formatSize(d.size)}
            </small>
          </span>
        </button>
      ))}
      <AddDocuments files={picked} tripId={trip.id} dek={dek} onClose={() => setPicked([])} />
      <DocViewer doc={viewing} dek={dek} onClose={() => setViewing(null)} />
    </>
  );
}
