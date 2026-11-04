import type { ExpenseCategory } from '../../core/db';
import { ru } from '../../core/strings';
import { CATEGORIES } from './calc';
import { CATEGORY_META } from './categories';

export function CategoryChips({ value, onChange }: { value: ExpenseCategory; onChange: (c: ExpenseCategory) => void }) {
  return (
    <div className="cat-row" role="group" aria-label="Категория">
      {CATEGORIES.map((c) => (
        <button key={c} type="button" className="cat-chip" aria-pressed={value === c} onClick={() => onChange(c)}>
          <span aria-hidden="true">{CATEGORY_META[c].emoji}</span>
          {ru.expenses.categories[c]}
        </button>
      ))}
    </div>
  );
}
