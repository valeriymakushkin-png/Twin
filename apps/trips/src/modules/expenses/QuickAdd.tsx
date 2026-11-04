import { useEffect, useRef, useState } from 'react';
import { todayIso } from '../../core/dates';
import type { ExpenseCategory, Trip } from '../../core/db';
import { ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Field, Icon } from '../../core/ui';
import { formatMoney } from '../../data/currencies';
import { CategoryChips } from './CategoryChips';
import { CurrencySelect } from './CurrencySelect';
import { parseAmount } from './calc';
import { addExpense } from './expenseRepo';

/** Дата для новой траты: сегодня, но не за пределами дат поездки (записываем траты именно этой поездки). */
export const defaultExpenseDate = (trip: Trip, today = todayIso()) => (today < trip.startDate ? trip.startDate : today > trip.endDate ? trip.endDate : today);

/** Быстрый ввод траты: сумма → категория → «Записать» (три касания). Валюта и категория запоминаются. */
export function QuickAdd({ trip, defaultCurrency, pinned }: { trip: Trip; defaultCurrency: string; pinned: string[] }) {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState(defaultCurrency);
  const [category, setCategory] = useState<ExpenseCategory>('food');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(() => defaultExpenseDate(trip));
  const [more, setMore] = useState(false);
  const [error, setError] = useState('');
  const amountRef = useRef<HTMLInputElement>(null);

  // Когда подгрузилась «последняя валюта» из базы, подставляем её (пока пользователь ничего не менял).
  useEffect(() => setCurrency(defaultCurrency), [defaultCurrency]);

  const submit = async () => {
    const value = parseAmount(amount);
    if (value === null) return setError(ru.expenses.badAmount);
    setError('');
    await addExpense(trip.id, { amount: value, currency, category, note, date });
    toast(`${ru.expenses.added}: ${formatMoney(value, currency)}`);
    setAmount('');
    setNote('');
    amountRef.current?.focus();
  };

  return (
    <form
      className="section quick"
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
    >
      <div className="quick-top">
        <input
          ref={amountRef}
          className="input quick-amount"
          inputMode="decimal"
          autoComplete="off"
          placeholder="0"
          aria-label={ru.expenses.amount}
          value={amount}
          onChange={(e) => (setAmount(e.target.value), setError(''))}
        />
        <div className="quick-cur">
          <CurrencySelect value={currency} onChange={setCurrency} pinned={pinned} label={ru.expenses.currency} />
        </div>
      </div>
      {error && <p className="field-error" style={{ marginBottom: 8 }}>{error}</p>}
      <CategoryChips value={category} onChange={setCategory} />
      {more && (
        <div className="row" style={{ marginTop: 10 }}>
          <Field label={ru.expenses.date}>
            <input className="input" type="date" value={date} onChange={(e) => e.target.value && setDate(e.target.value)} />
          </Field>
          <Field label={ru.expenses.note}>
            <input className="input" value={note} maxLength={120} placeholder={ru.expenses.notePlaceholder} onChange={(e) => setNote(e.target.value)} />
          </Field>
        </div>
      )}
      <div className="menu-row" style={{ marginTop: 10 }}>
        <button type="button" className="btn btn-ghost" onClick={() => setMore((m) => !m)} aria-expanded={more}>
          {more ? ru.expenses.hideDetails : `+ ${ru.expenses.date.toLowerCase()}, ${ru.expenses.note.toLowerCase()}`}
        </button>
        <Button type="submit" style={{ flex: 1 }} disabled={!amount.trim()}>
          <Icon name="plus" /> {ru.expenses.add}
        </Button>
      </div>
    </form>
  );
}

