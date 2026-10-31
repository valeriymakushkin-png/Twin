'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Building2, Cloud, Flag, HardDrive, History, Image as ImageIcon, Languages, LayoutDashboard, LogOut, Map as MapIcon, MapPin, Menu, Settings, ShieldCheck, Smartphone, Users, Wrench, X, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { toast, Toaster } from 'sonner';
import { Logo } from '@/components/logo';
import { useWorldText } from '@/content/world';
import { LOCALES } from '@/i18n/config';
import { useI18n } from '@/i18n/use';
import { adminRepo, useAdmin } from '@/lib/admin/repo';
import { can, ROLE_COLOR, type Action } from '@/lib/admin/roles';
import { cn } from '@/lib/utils';
import { AButton, Badge, ConfirmProvider, TextInput, useAdminError } from './ui';

interface NavItem {
  href: string;
  icon: LucideIcon;
  label: string;
  need?: Action;
}

function useNav() {
  const { t } = useI18n();
  const groups: { title?: string; items: NavItem[] }[] = [
    { items: [{ href: '/admin/', icon: LayoutDashboard, label: t('admin.nav.dashboard') }] },
    {
      title: t('admin.nav.groupContent'),
      items: [
        { href: '/admin/places/', icon: MapPin, label: t('admin.nav.places') },
        { href: '/admin/cities/', icon: Building2, label: t('admin.nav.cities') },
        { href: '/admin/countries/', icon: Flag, label: t('admin.nav.countries') },
        { href: '/admin/map/', icon: MapIcon, label: t('admin.nav.map') },
        { href: '/admin/photos/', icon: ImageIcon, label: t('admin.nav.photos') },
        { href: '/admin/translations/', icon: Languages, label: t('admin.nav.translations') },
        { href: '/admin/tools/', icon: Wrench, label: t('adminTools.nav') },
      ],
    },
    { title: t('admin.nav.groupCommunity'), items: [{ href: '/admin/moderation/', icon: ShieldCheck, label: t('admin.nav.moderation'), need: 'moderate' }] },
    {
      title: t('admin.nav.groupTeam'),
      items: [
        { href: '/admin/team/', icon: Users, label: t('admin.nav.team'), need: 'users.read' },
        { href: '/admin/audit/', icon: History, label: t('admin.nav.audit'), need: 'audit.read' },
        { href: '/admin/settings/', icon: Settings, label: t('admin.nav.settings') },
      ],
    },
  ];
  return groups;
}

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const groups = useNav();
  const { t, tk } = useI18n();
  const { user, setSession } = useAdmin();
  const active = (href: string) => (href === '/admin/' ? /^\/admin\/?$/.test(pathname) : pathname.startsWith(href.replace(/\/$/, '')));
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2.5 px-4 pb-4 pt-5">
        <Logo size={28} />
        <Badge color="#0071e3">Admin</Badge>
      </div>
      <nav className="min-h-0 flex-1 overflow-y-auto px-2.5">
        {groups.map((g, i) => {
          const items = g.items.filter((it) => !it.need || can(user?.role, it.need));
          if (!items.length) return null;
          return (
            <div key={i} className="mb-4">
              {g.title && <p className="mb-1 px-2.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#86868b]">{g.title}</p>}
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={onNavigate}
                  className={cn('flex h-9 items-center gap-2.5 rounded-[8px] px-2.5 text-[14px] font-medium transition-colors', active(it.href) ? 'bg-[#0071e3] text-white' : 'text-[#1d1d1f] hover:bg-black/5')}
                >
                  <it.icon className={cn('size-[18px]', active(it.href) ? 'text-white' : 'text-[#0071e3]')} strokeWidth={2} />
                  {it.label}
                </Link>
              ))}
            </div>
          );
        })}
      </nav>
      <div className="border-t border-black/5 p-3">
        <ModeBadge />
        <Link href="/discover/" className="mt-2 flex h-9 items-center gap-2.5 rounded-[8px] px-2.5 text-[14px] font-medium text-[#1d1d1f] hover:bg-black/5">
          <Smartphone className="size-[18px] text-[#0071e3]" /> {t('admin.nav.backToApp')}
        </Link>
        {user && (
          <div className="mt-2 flex items-center gap-2.5 rounded-[10px] bg-white/70 p-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-full text-[13px] font-bold text-white" style={{ background: ROLE_COLOR[user.role] }}>
              {user.name.slice(0, 1).toUpperCase()}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-semibold">{user.name}</span>
              <span className="block truncate text-[11px] text-[#6e6e73]">{tk(`admin.roles.${user.role}`)}</span>
            </span>
            <button aria-label={t('admin.auth.signOut')} onClick={() => setSession(null)} className="grid size-8 place-items-center rounded-full text-[#6e6e73] hover:bg-black/5">
              <LogOut className="size-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ModeBadge() {
  const { t } = useI18n();
  const remote = adminRepo.mode === 'remote';
  return (
    <div className={cn('flex items-start gap-2 rounded-[10px] p-2.5 text-[12px] leading-snug', remote ? 'bg-[#34c759]/10 text-[#1d6b34]' : 'bg-[#ff9500]/10 text-[#8a4b00]')} title={remote ? t('admin.mode.remoteText') : t('admin.mode.localText')}>
      {remote ? <Cloud className="mt-px size-4 shrink-0" /> : <HardDrive className="mt-px size-4 shrink-0" />}
      <span>
        <b className="block">{remote ? t('admin.mode.remote') : t('admin.mode.local')}</b>
        <span className="line-clamp-2 opacity-80">{remote ? t('admin.mode.remoteText') : t('admin.mode.localText')}</span>
      </span>
    </div>
  );
}

function AuthCard({ title, text, children }: { title: string; text?: string; children: ReactNode }) {
  return (
    <div className="grid min-h-dvh place-items-center bg-[radial-gradient(900px_600px_at_20%_0%,#dbeafe_0%,transparent_60%),radial-gradient(800px_600px_at_100%_100%,#ede9fe_0%,transparent_55%),#f5f5f7] p-4">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-[400px] rounded-[22px] bg-white/90 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur">
        <div className="flex items-center gap-2.5">
          <Logo size={32} />
          <Badge color="#0071e3">Admin</Badge>
        </div>
        <h1 className="mt-6 text-[24px] font-bold tracking-[-0.02em]">{title}</h1>
        {text && <p className="mt-1.5 text-[14px] leading-relaxed text-[#6e6e73]">{text}</p>}
        <div className="mt-6">{children}</div>
        <div className="mt-6">
          <ModeBadge />
        </div>
      </motion.div>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="mb-3 block">
      <span className="mb-1 block text-[13px] font-medium text-[#1d1d1f]">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-[12px] text-[#86868b]">{hint}</span>}
    </label>
  );
}

function SetupForm() {
  const { t } = useI18n();
  const setSession = useAdmin((s) => s.setSession);
  const errorText = useAdminError();
  const [f, setF] = useState({ name: '', email: '', password: '', setupToken: '' });
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      setSession(await adminRepo.setup(f));
    } catch (err) {
      toast.error(errorText(err));
    } finally {
      setBusy(false);
    }
  };
  return (
    <AuthCard title={t('admin.auth.setupTitle')} text={t('admin.auth.setupText')}>
      <form onSubmit={submit}>
        <Field label={t('admin.auth.name')}>
          <TextInput required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} autoComplete="name" />
        </Field>
        <Field label={t('admin.auth.email')}>
          <TextInput required type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} autoComplete="email" />
        </Field>
        <Field label={t('admin.auth.password')} hint={t('admin.auth.passwordHint')}>
          <TextInput required type="password" minLength={8} value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} autoComplete="new-password" />
        </Field>
        {adminRepo.mode === 'remote' && (
          <Field label={t('admin.auth.setupToken')} hint={t('admin.auth.setupTokenHint')}>
            <TextInput value={f.setupToken} onChange={(e) => setF({ ...f, setupToken: e.target.value })} />
          </Field>
        )}
        <AButton type="submit" loading={busy} className="mt-2 w-full">
          {t('admin.auth.create')}
        </AButton>
      </form>
    </AuthCard>
  );
}

function LoginForm() {
  const { t } = useI18n();
  const setSession = useAdmin((s) => s.setSession);
  const errorText = useAdminError();
  const [f, setF] = useState({ email: '', password: '' });
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      setSession(await adminRepo.login(f.email, f.password));
    } catch (err) {
      toast.error(errorText(err));
    } finally {
      setBusy(false);
    }
  };
  return (
    <AuthCard title={t('admin.auth.loginTitle')}>
      <form onSubmit={submit}>
        <Field label={t('admin.auth.email')}>
          <TextInput required type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} autoComplete="username" autoFocus />
        </Field>
        <Field label={t('admin.auth.password')}>
          <TextInput required type="password" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} autoComplete="current-password" />
        </Field>
        <AButton type="submit" loading={busy} className="mt-2 w-full">
          {t('admin.auth.signIn')}
        </AButton>
      </form>
    </AuthCard>
  );
}

export function ChangePasswordForm({ onDone }: { onDone?: () => void }) {
  const { t } = useI18n();
  const { token, setSession } = useAdmin();
  const errorText = useAdminError();
  const [f, setF] = useState({ current: '', next: '' });
  const [busy, setBusy] = useState(false);
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      setSession(await adminRepo.changePassword(token!, f.current, f.next));
      toast.success(t('admin.auth.passwordChanged'));
      setF({ current: '', next: '' });
      onDone?.();
    } catch (err) {
      toast.error(errorText(err));
    } finally {
      setBusy(false);
    }
  };
  return (
    <form onSubmit={submit}>
      <Field label={t('admin.auth.currentPassword')}>
        <TextInput required type="password" value={f.current} onChange={(e) => setF({ ...f, current: e.target.value })} autoComplete="current-password" />
      </Field>
      <Field label={t('admin.auth.newPassword')} hint={t('admin.auth.passwordHint')}>
        <TextInput required type="password" minLength={8} value={f.next} onChange={(e) => setF({ ...f, next: e.target.value })} autoComplete="new-password" />
      </Field>
      <AButton type="submit" loading={busy}>
        {t('admin.auth.changePassword')}
      </AButton>
    </form>
  );
}

export function AdminShell({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  const { token, user, refresh } = useAdmin();
  const [setup, setSetup] = useState<boolean | null>(null);
  const [menu, setMenu] = useState(false);
  const loadText = useWorldText((s) => s.load);

  useEffect(() => {
    document.title = 'Vylo Admin';
    adminRepo
      .needsSetup()
      .then(setSetup)
      .catch(() => setSetup(false));
    void refresh();
    // Editors work in every language at once.
    LOCALES.forEach((l) => void loadText(l));
  }, [refresh, loadText]);

  const toaster = <Toaster position="top-center" toastOptions={{ classNames: { toast: '!rounded-2xl !font-sans' } }} />;
  if (setup === null) return <div className="grid min-h-dvh place-items-center text-[#86868b]">{t('admin.common.loading')}</div>;
  if (setup && !token)
    return (
      <>
        <SetupForm />
        {toaster}
      </>
    );
  if (!token || !user)
    return (
      <>
        <LoginForm />
        {toaster}
      </>
    );
  if (user.mustChangePassword)
    return (
      <>
        <AuthCard title={t('admin.auth.changePassword')} text={t('admin.auth.mustChange')}>
          <ChangePasswordForm />
        </AuthCard>
        {toaster}
      </>
    );

  return (
    <ConfirmProvider>
      <div className="flex min-h-dvh bg-[#f5f5f7] font-sans text-[#1d1d1f]">
        <aside className="sticky top-0 hidden h-dvh w-[260px] shrink-0 border-r border-black/5 bg-[#ececee]/80 backdrop-blur-xl lg:block">
          <Sidebar />
        </aside>
        <div className="min-w-0 flex-1">
          <div className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-black/5 bg-[#f5f5f7]/85 px-4 backdrop-blur-xl lg:hidden">
            <button aria-label="Menu" onClick={() => setMenu(true)} className="grid size-9 place-items-center rounded-full hover:bg-black/5">
              <Menu className="size-5" />
            </button>
            <Logo size={24} />
          </div>
          <main className="mx-auto w-full max-w-[1120px] px-4 py-6 md:px-8 md:py-10">{children}</main>
        </div>
        <AnimatePresence>
          {menu && (
            <motion.div className="fixed inset-0 z-[150] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="absolute inset-0 bg-black/30" onClick={() => setMenu(false)} />
              <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ type: 'spring', stiffness: 400, damping: 40 }} className="absolute inset-y-0 left-0 w-[280px] bg-[#f2f2f4]">
                <button aria-label={t('admin.common.cancel')} onClick={() => setMenu(false)} className="absolute right-3 top-4 grid size-8 place-items-center rounded-full hover:bg-black/5">
                  <X className="size-4" />
                </button>
                <Sidebar onNavigate={() => setMenu(false)} />
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {toaster}
    </ConfirmProvider>
  );
}
