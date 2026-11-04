import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo, useState } from 'react';
import { formatDayLong, formatDayShort, toIso, todayIso } from '../../core/dates';
import { db, type Expense, type Trip } from '../../core/db';
import { saveFile, safeFileName } from '../../core/files';
import { fill, plural, ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Empty, Icon } from '../../core/ui';
import { currencyForCountry, formatMoney } from '../../data/currencies';
import { BudgetSheet } from './BudgetSheet';
import { ExpenseEditor } from './ExpenseEditor';
import { QuickAdd } from './QuickAdd';
import { RatesSheet } from './RatesPanel';
import { CATEGORY_META } from './categories';
import { summarize } from './calc';
import { expensesToCsv } from './csv';
import { lastCurrencyKey } from './expenseRepo';
import { isOutdated } from './rates';
import { tripCurrency, useHomeCurrency, useRatesData } from './useRates';

const percent = (r: number) => `${Math.round(r * 100)}%`;

/** Вкладка «Расходы»: быстрый ввод, итоги, бюджет, по категориям и по дням, курсы, CSV. */
export function ExpensesTab({ trip }: { trip: Trip }) {
  const home = useHomeCurrency();
  const currency = tripCurrency(trip, home);
  const { rates, cache, ready } = useRatesData();
  const expenses = useLiveQuery(() => db.expenses.where('tripId').equals(trip.id).toArray(), [trip.id]);
  const last = useLiveQuery(async () => (await db.settings.get(lastCurrencyKey(trip.id)))?.value as string | undefined, [trip.id]);
  const [editing, setEditing] = useState<Expense | null>(null);
  const [ratesOpen, setRatesOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  const local = currencyForCountry(trip.countryCode);
  // Валюта по умолчанию для новой траты — та, в которой платили в прошлый раз, иначе валюта страны поездки.
  const defaultCurrency = last ?? local ?? currency;
  const pinned = useMemo(() => [...new Set([last, local, currency, 'USD', 'EUR'].filter((c): c is string => !!c))], [last, local, currency]);
  const summary = useMemo(() => summarize(expenses ?? [], { startDate: trip.startDate, endDate: trip.endDate, currency, budget: trip.budget }, rates, todayIso()), [expenses, trip.startDate, trip.endDate, trip.budget, currency, rates]);
  const money = (n: number) => formatMoney(n, currency);

  const exportCsv = async () => {
    const csv = expensesToCsv(summary, (c) => ru.expenses.categories[c as keyof typeof ru.expenses.categories] ?? c, [...ru.expenses.csvHeader]);
    await saveFile(csv, `vylo-${safeFileName(trip.name)}-${todayIso()}.csv`, 'text/csv;charset=utf-8');
  };

  // Пока база читается, ничего не показываем: иначе на миг мелькнули бы «нет курса» и нулевые суммы.
  if (!ready || !expenses) return <p className="muted" style={{ textAlign: 'center', padding: 30 }}>{ru.loading}</p>;

  // Строка про курсы нужна, только когда есть траты в валюте, отличной от валюты отчётов: тогда итог зависит от курса.
  const hasForeign = (expenses ?? []).some((e) => e.currency !== currency);
  const outdated = isOutdated(cache, Date.now());
  const dateOf = (ms: number) => formatDayShort(toIso(new Date(ms)));

  const b = summary.budget;
  return (
    <>
      <section className="summary" aria-label={ru.expenses.total}>
        <p className="summary-label">{ru.expenses.total}</p>
        <p className="summary-total">{money(summary.total)}</p>
        <div className="summary-stats">
          <span>
            {ru.expenses.today}: <b>{money(summary.today)}</b>
          </span>
          {summary.averagePerDay !== undefined && (
            <span>
              {ru.expenses.perDay}: <b>{money(summary.averagePerDay)}</b>
            </span>
          )}
        </div>
        {b ? (
          <>
            <div className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.min(100, Math.round(b.ratio * 100))}>
              <span className={`bar-fill ${b.state}`} style={{ width: `${Math.min(100, b.ratio * 100)}%` }} />
            </div>
            <div className="summary-stats">
              <span>
                {ru.expenses.budget}: <b>{money(b.amount)}</b> · {percent(b.ratio)}
              </span>
              <span className={b.state === 'over' ? 'over-text' : ''}>
                {b.left >= 0 ? ru.expenses.budgetLeft : ru.expenses.budgetOver}: <b>{money(Math.abs(b.left))}</b>
              </span>
            </div>
          </>
        ) : (
          <p className="summary-note">{ru.expenses.noBudget}</p>
        )}
        <button className="summary-link" onClick={() => setBudgetOpen(true)}>
          {b ? ru.expenses.editBudget : ru.expenses.setBudget}
        </button>
      </section>

      {hasForeign && (
        <p className={`rates-line ${cache && !outdated ? '' : 'warn'}`}>
          {!cache ? ru.expenses.ratesMissingLine : outdated ? fill(ru.expenses.ratesOutdated, { date: dateOf(cache.publishedAt) }) : fill(ru.expenses.ratesLine, { date: dateOf(cache.publishedAt), source: cache.source })}
        </p>
      )}

      {summary.missing.length > 0 && (
        <button type="button" className="notice" onClick={() => setRatesOpen(true)}>
          {plural(summary.missing.length, ru.expenses.missing as unknown as readonly [string, string, string])} — <u>{ru.expenses.setRates}</u>
        </button>
      )}

      <QuickAdd trip={trip} defaultCurrency={defaultCurrency} pinned={pinned} />

      {expenses && expenses.length === 0 && <Empty icon="file" title={ru.expenses.empty} text={ru.expenses.emptyText} />}

      {summary.byCategory.length > 0 && (
        <section className="section">
          <h3 style={{ marginBottom: 10 }}>{ru.expenses.byCategory}</h3>
          {summary.byCategory.map((c) => (
            <div key={c.category} className="cat-bar">
              <div className="cat-bar-head">
                <span>
                  <span aria-hidden="true">{CATEGORY_META[c.category].emoji}</span> {ru.expenses.categories[c.category]}
                </span>
                <span>
                  <b>{money(c.total)}</b> <small>{percent(c.share)}</small>
                </span>
              </div>
              <div className="bar thin">
                <span className="bar-fill" style={{ width: `${c.share * 100}%`, background: CATEGORY_META[c.category].color }} />
              </div>
            </div>
          ))}
        </section>
      )}

      {summary.byDay.length > 0 && <h3 style={{ margin: '18px 4px 8px' }}>{ru.expenses.byDay}</h3>}
      {summary.byDay.map((day) => (
        <section key={day.date} className="expense-day">
          <div className="expense-day-head">
            <span>
              {formatDayLong(day.date)}
              {day.date < trip.startDate && <small> · {ru.expenses.daysBefore}</small>}
            </span>
            <b>{money(day.total)}</b>
          </div>
          {day.items.map(({ expense: e, value }) => (
            <button key={e.id} type="button" className="expense" onClick={() => setEditing(e)}>
              <span className="expense-icon" aria-hidden="true">
                {CATEGORY_META[e.category].emoji}
              </span>
              <span className="expense-main">
                <b>{e.note || ru.expenses.categories[e.category]}</b>
                {e.note && <small>{ru.expenses.categories[e.category]}</small>}
              </span>
              <span className="expense-amount">
                <b>{formatMoney(e.amount, e.currency)}</b>
                {e.currency !== currency && <small>{value === undefined ? ru.expenses.noRate : `≈ ${money(value)}`}</small>}
              </span>
            </button>
          ))}
        </section>
      ))}

      <div className="menu-row" style={{ marginTop: 16 }}>
        <Button variant="secondary" style={{ flex: 1 }} onClick={() => setRatesOpen(true)}>
          {ru.expenses.ratesTitle}
        </Button>
        {summary.count > 0 && (
          <Button variant="secondary" style={{ flex: 1 }} onClick={() => void exportCsv().catch(() => toast(ru.saveFailed, 'error'))}>
            <Icon name="download" /> {ru.expenses.exportCsv}
          </Button>
        )}
      </div>

      <ExpenseEditor expense={editing} pinned={pinned} onClose={() => setEditing(null)} />
      <RatesSheet open={ratesOpen} onClose={() => setRatesOpen(false)} expenses={expenses ?? []} currency={currency} />
      <BudgetSheet open={budgetOpen} onClose={() => setBudgetOpen(false)} trip={trip} currency={currency} pinned={pinned} />
    </>
  );
}

