import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo, useState } from 'react';
import { db, type Trip } from '../../core/db';
import { fill, ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Button, Icon, Sheet } from '../../core/ui';
import { useLocator } from '../../core/useCities';
import { CityPickerSheet } from './CityPickerSheet';
import { checkTrip, type Issue } from './check';

/** Плашка «Проверка данных» на странице поездки: показывается, только если найдены противоречия, и сразу предлагает исправления. */
export function TripCheck({ trip }: { trip: Trip }) {
  const items = useLiveQuery(() => db.items.where('tripId').equals(trip.id).toArray(), [trip.id]);
  const expenses = useLiveQuery(() => db.expenses.where('tripId').equals(trip.id).toArray(), [trip.id]);
  const locate = useLocator();
  const [open, setOpen] = useState(false);
  const [pickCity, setPickCity] = useState<string | null>(null);
  const issues = useMemo(() => (items && expenses && locate ? checkTrip(trip, items, expenses, locate) : []), [trip, items, expenses, locate]);
  if (issues.length === 0 && !open) return pickCity !== null ? <CityPickerSheet trip={trip} city={pickCity} onClose={() => setPickCity(null)} /> : null;

  const warns = issues.filter((i) => i.level === 'warn').length;
  const apply = async (issue: Issue) => {
    const fix = issue.fix;
    if (!fix) return;
    if (fix.kind === 'extendDates') {
      await db.trips.update(trip.id, { startDate: fix.start, endDate: fix.end, updatedAt: Date.now() });
      toast(ru.trips.check.datesExtended);
    } else setPickCity(fix.city);
  };

  return (
    <>
      <button type="button" className={`notice ${warns ? '' : 'info'}`} onClick={() => setOpen(true)}>
        <Icon name="info" size={18} /> {fill(ru.trips.check.banner, { n: issues.length })}
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} title={ru.trips.check.title}>
        {issues.length === 0 ? (
          <p className="muted">{ru.trips.check.ok}</p>
        ) : (
          <ul className="issues">
            {issues.map((i) => (
              <li key={i.id} className={i.level}>
                <p>{i.text}</p>
                {i.fix && (
                  <Button variant="secondary" onClick={() => void apply(i)}>
                    {i.fix.kind === 'extendDates' ? ru.trips.check.extend : ru.trips.check.pick}
                  </Button>
                )}
              </li>
            ))}
          </ul>
        )}
      </Sheet>
      <CityPickerSheet trip={trip} city={pickCity} onClose={() => setPickCity(null)} />
    </>
  );
}
