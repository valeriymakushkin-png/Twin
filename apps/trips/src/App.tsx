import { useEffect } from 'react';
import { HashRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useOnline } from './core/hooks';
import { ru } from './core/strings';
import { Toaster } from './core/toast';
import { Icon } from './core/ui';
import { VaultProvider } from './modules/documents/vault';
import { startRatesAutoRefresh } from './modules/expenses/rates';
import { SettingsPage } from './modules/settings/SettingsPage';
import { TripPage } from './modules/trips/TripPage';
import { TripsPage } from './modules/trips/TripsPage';

/** Индикатор сети: приложению интернет не нужен, но пользователю спокойнее видеть, что «офлайн — это нормально». */
export function NetPill() {
  const online = useOnline();
  return <span className={`net-pill ${online ? '' : 'off'}`}>{online ? ru.online : ru.offline}</span>;
}

function TabBar() {
  const { pathname } = useLocation();
  // На странице самой поездки нижнее меню прячется: там своя шапка с кнопкой «назад».
  if (pathname.startsWith('/trip/')) return null;
  return (
    <nav className="tabbar" aria-label="Разделы">
      <NavLink to="/" end>
        <Icon name="suitcase" />
        {ru.tabs.trips}
      </NavLink>
      <NavLink to="/settings">
        <Icon name="gear" />
        {ru.tabs.settings}
      </NavLink>
    </nav>
  );
}

export function App() {
  // Когда есть интернет, курсы валют подгружаются сами (при запуске, при появлении сети, при возвращении в приложение).
  useEffect(() => startRatesAutoRefresh(), []);
  return (
    <HashRouter>
      <VaultProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<TripsPage />} />
            <Route path="/trip/:id" element={<TripPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<TripsPage />} />
          </Routes>
          <TabBar />
          <Toaster />
        </div>
      </VaultProvider>
    </HashRouter>
  );
}
