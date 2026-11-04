import { useMemo, useState } from 'react';
import { ru } from '../../core/strings';
import { useCityIndex } from '../../core/useCities';
import { Icon } from '../../core/ui';
import { cityCountryName, searchCities } from '../../data/cities';
import { countryFlag } from '../../data/countries';
import { setHomeCity, useHomeCity } from '../map/home';

/** Выбор домашнего города из встроенного списка. Необязательно; список городов грузится только когда начинают вводить. */
export function HomeCityField() {
  const home = useHomeCity();
  const [draft, setDraft] = useState('');
  const [active, setActive] = useState(false);
  const index = useCityIndex(active);
  const hits = useMemo(() => (index && draft.trim().length >= 2 ? searchCities(index, draft, { limit: 6 }) : []), [index, draft]);

  return (
    <>
      <p className="muted" style={{ marginBottom: 10 }}>{ru.settings.homeHint}</p>
      {home ? (
        <div className="chips">
          <span className="chip">
            {countryFlag(home.countryCode)} {home.name}
            <button type="button" aria-label={ru.settings.homeClear} onClick={() => void setHomeCity(null)}>
              <Icon name="close" size={14} />
            </button>
          </span>
        </div>
      ) : (
        <div className="city-box">
          <input
            className="input"
            value={draft}
            placeholder={ru.settings.homePlaceholder}
            aria-label={ru.settings.homeTitle}
            onFocus={() => setActive(true)}
            onChange={(e) => (setActive(true), setDraft(e.target.value))}
            maxLength={60}
            autoComplete="off"
          />
          {hits.length > 0 && (
            <ul className="suggest" role="listbox">
              {hits.map(({ city, label }) => (
                <li key={`${city.cc}${city.lat}${city.lng}`}>
                  <button
                    type="button"
                    role="option"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      void setHomeCity({ name: label, countryCode: city.cc, lat: city.lat, lng: city.lng });
                      setDraft('');
                    }}
                  >
                    <b>{label}</b>
                    <small>{cityCountryName(city)}</small>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
