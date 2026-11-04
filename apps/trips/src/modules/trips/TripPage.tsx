import { useLiveQuery } from 'dexie-react-hooks';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NetPill } from '../../App';
import { countryFlag, countryName } from '../../data/countries';
import { daysBetween, formatRange } from '../../core/dates';
import { db } from '../../core/db';
import { useObjectUrl } from '../../core/hooks';
import { fill, plural, ru } from '../../core/strings';
import { toast } from '../../core/toast';
import { Empty, IconButton } from '../../core/ui';
import { DocumentsTab } from '../documents/DocumentsTab';
import { ExpensesTab } from '../expenses/ExpensesTab';
import { ItineraryTab } from '../itinerary/ItineraryTab';
import { TripForm } from './TripForm';
import { deleteTrip } from './tripRepo';

type Tab = 'itinerary' | 'expenses' | 'documents';

export function TripPage() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const trip = useLiveQuery(() => db.trips.get(id), [id]);
  const cover = useLiveQuery(() => (trip?.coverPhotoId ? db.photos.get(trip.coverPhotoId) : undefined), [trip?.coverPhotoId]);
  const coverUrl = useObjectUrl(cover?.blob);
  const [tab, setTab] = useState<Tab>('itinerary');
  const [editing, setEditing] = useState(false);

  // useLiveQuery возвращает undefined, пока грузится, и тоже undefined, если записи нет — отличаем по отдельному запросу.
  const exists = useLiveQuery(() => db.trips.where('id').equals(id).count(), [id]);

  if (!trip) {
    return (
      <>
        <header className="topbar">
          <IconButton icon="back" label={ru.back} onClick={() => navigate('/')} />
          <h1> </h1>
        </header>
        {exists === 0 && <Empty icon="suitcase" title={ru.trips.notFound} />}
      </>
    );
  }

  const days = daysBetween(trip.startDate, trip.endDate) + 1;
  const remove = async () => {
    if (!window.confirm(fill(ru.trips.deleteConfirm, { name: trip.name }))) return;
    await deleteTrip(trip.id);
    toast('Поездка удалена');
    navigate('/', { replace: true });
  };

  return (
    <>
      <header className="topbar">
        <IconButton icon="back" label={ru.back} onClick={() => navigate('/')} />
        <h1>{trip.name}</h1>
        <NetPill />
        <IconButton icon="edit" label={ru.edit} onClick={() => setEditing(true)} />
        <IconButton icon="trash" label={ru.delete} onClick={remove} />
      </header>
      <main className="content">
        <div className="hero">
          {coverUrl && <img src={coverUrl} alt="" />}
          <div className="hero-body">
            <h2>
              {countryFlag(trip.countryCode)} {countryName(trip.countryCode)}
            </h2>
            <p>
              {formatRange(trip.startDate, trip.endDate)} · {plural(days, ru.trips.days)}
              {trip.cities.length > 0 && ` · ${trip.cities.map((c) => c.name).join(', ')}`}
            </p>
          </div>
        </div>
        <div className="tabs" role="tablist">
          <button role="tab" aria-selected={tab === 'itinerary'} onClick={() => setTab('itinerary')}>
            {ru.trips.tabItinerary}
          </button>
          <button role="tab" aria-selected={tab === 'expenses'} onClick={() => setTab('expenses')}>
            {ru.trips.tabExpenses}
          </button>
          <button role="tab" aria-selected={tab === 'documents'} onClick={() => setTab('documents')}>
            {ru.trips.tabDocuments}
          </button>
        </div>
        {tab === 'itinerary' ? <ItineraryTab trip={trip} /> : tab === 'expenses' ? <ExpensesTab trip={trip} /> : <DocumentsTab trip={trip} />}
      </main>
      <TripForm open={editing} onClose={() => setEditing(false)} trip={trip} currentCover={cover?.blob} />
    </>
  );
}
