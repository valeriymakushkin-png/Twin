import { Component, type ReactNode } from 'react';
import { BACKUP_EXTENSION, createBackup } from './backup';
import { db } from './db';
import { saveFile } from './files';
import { ru } from './strings';
import { Button, Empty } from './ui';

/**
 * Страховка от «белого экрана»: если в каком-то экране случилась ошибка, пользователь видит спокойное сообщение, может
 * перезагрузить приложение или вернуться на главную и — главное — сохранить копию данных, пока они целы.
 * `resetKey` (адрес страницы) сбрасывает ошибку при переходе на другой экран.
 */
export class ErrorBoundary extends Component<{ children: ReactNode; resetKey?: string }, { error: Error | null; saving: boolean }> {
  state = { error: null as Error | null, saving: false };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error('Ошибка экрана:', error);
  }

  componentDidUpdate(prev: { resetKey?: string }) {
    if (this.state.error && prev.resetKey !== this.props.resetKey) this.setState({ error: null });
  }

  private saveCopy = async () => {
    this.setState({ saving: true });
    try {
      const stamp = new Date().toISOString().slice(0, 10);
      await saveFile(await createBackup(db), `vylo-${stamp}${BACKUP_EXTENSION}`);
    } catch {
      /* копию не удалось сохранить — пользователь увидит, что ничего не скачалось, и может попробовать из «Настроек» */
    }
    this.setState({ saving: false });
  };

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <main className="content" role="alert">
        <Empty
          icon="info"
          title={ru.errors.title}
          text={ru.errors.text}
          action={
            <div className="menu-row" style={{ justifyContent: 'center', flexWrap: 'wrap', marginTop: 14 }}>
              <Button onClick={() => window.location.reload()}>{ru.errors.reload}</Button>
              <Button variant="secondary" onClick={() => (window.location.hash = '#/')}>
                {ru.errors.home}
              </Button>
              <Button variant="secondary" disabled={this.state.saving} onClick={() => void this.saveCopy()}>
                {ru.errors.saveCopy}
              </Button>
            </div>
          }
        />
        <p className="muted" style={{ textAlign: 'center', fontSize: 12, marginTop: 10, overflowWrap: 'anywhere' }}>
          {this.state.error.message}
        </p>
      </main>
    );
  }
}
