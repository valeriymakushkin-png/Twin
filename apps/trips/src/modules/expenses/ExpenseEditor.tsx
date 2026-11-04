import { useEffect, useState } from 'react';
import type { Expense, ExpenseCategory } from '../../core/db';
import { ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Field, Icon, Sheet } from '../../core/ui';
import { CategoryChips } from './CategoryChips';
import { CurrencySelect } from './CurrencySelect';
import { parseAmount } from './calc';
import { deleteExpense, updateExpense } from './expenseRepo';

export function ExpenseEditor({ expense, pinned, onClose }: { expense: Expense | null; pinned: string[]; onClose: () => void }) {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('EUR');
  const [category, setCategory] = useState<ExpenseCategory>('food');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!expense) return;
    setAmount(String(expense.amount).replace('.', ','));
    setCurrency(expense.currency);
    setCategory(expense.category);
    setNote(expense.note ?? '');
    setDate(expense.date);
    setError('');
  }, [expense]);

  if (!expense) return null;

  const save = async () => {
    const value = parseAmount(amount);
    if (value === null) return setError(ru.expenses.badAmount);
    await updateExpense(expense.id, { amount: value, currency, category, note, date });
    toast(ru.saved);
    onClose();
  };

  return (
    <Sheet
      open
      onClose={onClose}
      title={ru.expenses.edit}
      footer={
        <>
          <Button
            variant="danger"
            aria-label={ru.delete}
            onClick={async () => {
              if (!window.confirm(ru.expenses.deleteConfirm)) return;
              await deleteExpense(expense.id);
              onClose();
            }}
          >
            <Icon name="trash" />
          </Button>
          <Button onClick={save} style={{ flex: 1 }}>
            {ru.save}
          </Button>
        </>
      }
    >
      <div className="row">
        <Field label={ru.expenses.amount} error={error}>
          <input className="input" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Field>
        <Field label={ru.expenses.currency}>
          <CurrencySelect value={currency} onChange={setCurrency} pinned={pinned} label={ru.expenses.currency} />
        </Field>
      </div>
      <CategoryChips value={category} onChange={setCategory} />
      <div style={{ height: 14 }} />
      <Field label={ru.expenses.date}>
        <input className="input" type="date" value={date} onChange={(e) => e.target.value && setDate(e.target.value)} />
      </Field>
      <Field label={ru.expenses.note}>
        <input className="input" value={note} maxLength={120} onChange={(e) => setNote(e.target.value)} />
      </Field>
    </Sheet>
  );
}
