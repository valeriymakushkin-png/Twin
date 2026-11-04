import { useEffect, useState } from 'react';
import type { Trip } from '../../core/db';
import { ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Field, Sheet } from '../../core/ui';
import { CurrencySelect } from './CurrencySelect';
import { parseAmount } from './calc';
import { setHomeCurrency, updateTripMoney } from './expenseRepo';

/** Бюджет и валюта отчётов поездки. Пустая сумма — «без бюджета». */
export function BudgetSheet({ open, onClose, trip, currency, pinned }: { open: boolean; onClose: () => void; trip: Trip; currency: string; pinned: string[] }) {
  const [amount, setAmount] = useState('');
  const [cur, setCur] = useState(currency);
  const [error, setError] = useState('');
  useEffect(() => {
    if (!open) return;
    setAmount(trip.budget ? String(trip.budget).replace('.', ',') : '');
    setCur(currency);
    setError('');
  }, [open, trip.budget, currency]);

  const save = async () => {
    const value = amount.trim() ? parseAmount(amount) : undefined;
    if (value === null) return setError(ru.trips.badBudget);
    await updateTripMoney(trip.id, { currency: cur, budget: value });
    await setHomeCurrency(cur);
    toast(ru.saved);
    onClose();
  };

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={ru.expenses.budgetSheet}
      footer={
        <Button className="btn-block" onClick={save}>
          {ru.save}
        </Button>
      }
    >
      <Field label={ru.trips.currency} hint={ru.trips.currencyHint}>
        <CurrencySelect value={cur} onChange={setCur} pinned={pinned} label={ru.trips.currency} />
      </Field>
      <Field label={ru.trips.budget} error={error}>
        <input className="input" inputMode="decimal" value={amount} placeholder={ru.trips.budgetPlaceholder} onChange={(e) => setAmount(e.target.value)} />
      </Field>
    </Sheet>
  );
}
