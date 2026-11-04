import { useState } from 'react';
import { formatDayShort, toIso } from '../../core/dates';
import type { Expense } from '../../core/db';
import { useOnline } from '../../core/hooks';
import { fill, ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Field, Sheet } from '../../core/ui';
import { currencyName } from '../../data/currencies';
import { displayRate, parseAmount, rateBetween, type Rates } from './calc';
import { setAutoRates, setManualRate } from './expenseRepo';
import { refreshRates } from './rates';
import { useRatesData } from './useRates';

const whenLoaded = (ms: number) => new Date(ms).toLocaleString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
const fmtRate = (n: number) => new Intl.NumberFormat('ru-RU', { maximumSignificantDigits: 6 }).format(n);

/** Состояние курсов: на какую дату, откуда, переключатель автозагрузки и кнопка «Обновить». Используется в настройках и в «Курсах». */
export function RatesPanel() {
  const { cache, autoEnabled } = useRatesData();
  const online = useOnline();
  const [busy, setBusy] = useState(false);
  // Переключатель показывает выбор сразу, не дожидаясь записи в базу (иначе он на мгновение «отскакивал» бы назад).
  const [pending, setPending] = useState<boolean | null>(null);

  const refresh = async () => {
    setBusy(true);
    const result = await refreshRates({ force: true });
    setBusy(false);
    toast(result === 'updated' ? ru.expenses.refreshed : result === 'offline' ? ru.expenses.refreshOffline : ru.expenses.refreshFailed, result === 'updated' ? 'ok' : 'error');
  };

  return (
    <div>
      <p style={{ fontWeight: 650 }}>{cache ? fill(ru.expenses.ratesAt, { date: formatDayShort(toIso(new Date(cache.publishedAt))) }) : ru.expenses.ratesNone}</p>
      <p className="muted" style={{ marginTop: 2 }}>
        {cache ? fill(ru.expenses.ratesSource, { when: whenLoaded(cache.fetchedAt), source: cache.source }) : ru.expenses.ratesNoneText}
      </p>
      {!online && <p className="muted" style={{ marginTop: 6 }}>{ru.expenses.ratesOffline}</p>}
      <label className="switch-row">
        <span>
          <b>{ru.expenses.ratesAuto}</b>
          <small>{ru.expenses.ratesAutoHint}</small>
        </span>
        <input
          type="checkbox"
          role="switch"
          checked={pending ?? autoEnabled}
          onChange={(e) => {
            setPending(e.target.checked);
            void setAutoRates(e.target.checked).then(() => setPending(null));
          }}
        />
      </label>
      <Button variant="secondary" className="btn-block" onClick={refresh} disabled={busy || !online}>
        {ru.expenses.refresh}
      </Button>
      <p className="muted" style={{ marginTop: 10, fontSize: 12.5 }}>{ru.expenses.ratesCredit}</p>
    </div>
  );
}

function RateRow({ from, to, rates, onSaved }: { from: string; to: string; rates: Rates; onSaved: () => void }) {
  const effective = rateBetween(from, to, rates);
  const auto = rateBetween(from, to, { auto: rates.auto, manual: {} });
  // Показываем курс «в удобную сторону»: 1 € = 28 500 ₫, а не 1 ₫ = 0,000035 €.
  const shape = displayRate((effective ?? auto)?.rate ?? 1);
  const unitFrom = shape.inverted ? to : from;
  const unitTo = shape.inverted ? from : to;
  const manual = effective?.source === 'manual';
  const [text, setText] = useState<string | null>(null);
  const shown = text ?? (manual && effective ? fmtRate(shape.value) : '');

  const commit = async () => {
    if (text === null) return;
    const trimmed = text.trim();
    setText(null);
    if (!trimmed) return void (await setManualRate(from, to, null), onSaved());
    const value = parseAmount(trimmed);
    if (value === null) return toast(ru.expenses.badAmount, 'error');
    await setManualRate(from, to, shape.inverted ? 1 / value : value);
    onSaved();
  };

  return (
    <Field label={`${from} · ${currencyName(from)}`} hint={manual ? undefined : auto ? `${ru.expenses.auto}: ${fmtRate(shape.value)}` : ru.expenses.noRate}>
      <div className="rate-row">
        <span>{fill(ru.expenses.rateRow, { from: unitFrom })}</span>
        <input
          className="input"
          inputMode="decimal"
          value={shown}
          placeholder={auto ? fmtRate(shape.value) : '0'}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => void commit()}
          onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
          aria-label={`${ru.expenses.rateRow.replace('{from}', unitFrom)} ${unitTo}`}
        />
        <span>{unitTo}</span>
        {manual && (
          <button type="button" className="btn btn-ghost" style={{ minHeight: 40, padding: '0 10px' }} onClick={async () => (await setManualRate(from, to, null), setText(null), onSaved())}>
            {ru.expenses.reset}
          </button>
        )}
      </div>
    </Field>
  );
}

/** Курсы для валют, в которых в этой поездке есть расходы: автоматические или свои (свои важнее). */
export function RatesSheet({ open, onClose, expenses, currency }: { open: boolean; onClose: () => void; expenses: Expense[]; currency: string }) {
  const foreign = [...new Set(expenses.map((e) => e.currency))].filter((c) => c !== currency).sort();
  const { rates, ready } = useRatesData();
  const [, bump] = useState(0);
  return (
    <Sheet open={open} onClose={onClose} title={ru.expenses.ratesTitle}>
      <RatesPanel />
      <h3 style={{ margin: '18px 0 8px', fontSize: 16 }}>{ru.expenses.ratesUsed}</h3>
      {foreign.length === 0 ? <p className="muted">{ru.expenses.ratesUsedEmpty}</p> : ready && foreign.map((c) => <RateRow key={c} from={c} to={currency} rates={rates} onSaved={() => bump((n) => n + 1)} />)}
    </Sheet>
  );
}
