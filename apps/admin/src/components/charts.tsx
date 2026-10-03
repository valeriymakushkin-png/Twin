'use client';

import { useState, type ReactNode } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { compact, shortDate } from '@/lib/format';

/* Chart roles (dataviz reference palette, dark steps; validated on #111117). */
export const SURFACE = '#111117';
export const SERIES = ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181', '#008300'] as const;
const GRID = '#24242b';
const AXIS = '#383835';
const MUTED = '#898781';
const INK_2 = '#c3c2b7';

export interface SeriesDef {
  key: string;
  label: string;
  /** Index into SERIES — fixed per entity so filters never repaint survivors. */
  slot: number;
}

const axisProps = {
  tick: { fill: MUTED, fontSize: 11 },
  tickLine: false,
  axisLine: { stroke: AXIS },
} as const;

/* ----------------------------- frame ----------------------------- */

export function ChartCard({
  title,
  subtitle,
  legend,
  table,
  children,
  height = 240,
  loading,
}: {
  title: string;
  subtitle?: string;
  legend?: SeriesDef[];
  table?: { columns: string[]; rows: Array<Array<string | number>> };
  children: ReactNode;
  height?: number;
  loading?: boolean;
}) {
  const [view, setView] = useState<'chart' | 'table'>('chart');
  return (
    <section className="rounded-2xl border border-line bg-card p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[14px] font-semibold">{title}</h3>
          {subtitle && <p className="mt-0.5 text-[12px] text-muted">{subtitle}</p>}
        </div>
        {table && (
          <div className="flex rounded-lg border border-line p-0.5 text-[11px]">
            {(['chart', 'table'] as const).map((v) => (
              <button key={v} onClick={() => setView(v)} className={`rounded-md px-2 py-0.5 capitalize ${view === v ? 'bg-white/10 text-ink' : 'text-muted'}`}>
                {v}
              </button>
            ))}
          </div>
        )}
      </div>
      {legend && legend.length > 1 && view === 'chart' && <Legend series={legend} />}
      <div style={{ height }} className={loading ? 'opacity-50 transition-opacity' : 'transition-opacity'}>
        {view === 'chart' || !table ? (
          children
        ) : (
          <div className="h-full overflow-auto">
            <table className="w-full text-left text-[12px]">
              <thead className="sticky top-0 bg-card text-muted">
                <tr>{table.columns.map((c) => <th key={c} className="py-1.5 pr-3 font-medium">{c}</th>)}</tr>
              </thead>
              <tbody className="tabular text-ink-2">
                {table.rows.map((row, i) => (
                  <tr key={i} className="border-t border-line">
                    {row.map((cell, j) => <td key={j} className="py-1.5 pr-3">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

function Legend({ series }: { series: SeriesDef[] }) {
  return (
    <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1">
      {series.map((s) => (
        <span key={s.key} className="flex items-center gap-1.5 text-[12px] text-ink-2">
          <span className="inline-block h-2.5 w-2.5 rounded-[3px]" style={{ background: SERIES[s.slot] }} />
          {s.label}
        </span>
      ))}
    </div>
  );
}

/* ----------------------------- tooltip ----------------------------- */

interface TooltipPayloadItem {
  dataKey?: string | number;
  value?: number | string;
  color?: string;
}

function ChartTooltip({
  active,
  payload,
  label,
  series,
  format = (v) => compact(v),
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string | number;
  series: SeriesDef[];
  format?: (v: number) => string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="min-w-[140px] rounded-xl border border-line bg-[#1c1c24] px-3 py-2 shadow-xl">
      <div className="mb-1.5 text-[11px] text-muted">{typeof label === 'string' ? shortDate(label) : label}</div>
      {series.map((s) => {
        const item = payload.find((p) => p.dataKey === s.key);
        if (!item) return null;
        return (
          <div key={s.key} className="flex items-center gap-2 py-0.5">
            <span className="h-0.5 w-3 rounded-full" style={{ background: SERIES[s.slot] }} />
            <span className="tabular text-[13px] font-semibold text-ink">{format(Number(item.value ?? 0))}</span>
            <span className="text-[12px] text-ink-2">{s.label}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ----------------------------- line ----------------------------- */

/** Direct label at the last point only (selective labelling; legend carries the rest). */
function endLabel(lastIndex: number, text: string) {
  return function EndLabel(props: { x?: number | string; y?: number | string; index?: number }) {
    if (props.index !== lastIndex || props.x === undefined || props.y === undefined) return null;
    return (
      <text x={Number(props.x) + 8} y={Number(props.y) + 4} fill={INK_2} fontSize={11}>
        {text}
      </text>
    );
  };
}

export function TimeLineChart({
  data,
  series,
  format,
}: {
  data: Array<Record<string, string | number>>;
  series: SeriesDef[];
  format?: (v: number) => string;
}) {
  const last = data.length - 1;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 8, right: series.length > 1 ? 64 : 12, bottom: 0, left: -8 }}>
        <CartesianGrid vertical={false} stroke={GRID} />
        <XAxis dataKey="date" tickFormatter={shortDate} minTickGap={28} {...axisProps} />
        <YAxis allowDecimals={false} tickFormatter={(v) => compact(Number(v))} width={48} {...axisProps} axisLine={false} />
        <Tooltip cursor={{ stroke: AXIS, strokeWidth: 1 }} content={(p) => <ChartTooltip {...(p as object)} series={series} format={format} />} />
        {series.map((s) => (
          <Line
            key={s.key}
            type="monotone"
            dataKey={s.key}
            stroke={SERIES[s.slot]}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            dot={false}
            activeDot={{ r: 4, fill: SERIES[s.slot], stroke: SURFACE, strokeWidth: 2 }}
            isAnimationActive={false}
            label={series.length > 1 && series.length <= 4 ? endLabel(last, s.label) : undefined}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

/* ----------------------------- bars ----------------------------- */

interface SegmentShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  payload?: Record<string, number>;
  dataKey?: string;
}

/**
 * Stacked segment: 2px surface gap between segments, 4px rounded data-end only on the
 * topmost non-zero segment, square at the baseline.
 */
function stackSegment(keys: string[]) {
  return function Segment(props: unknown) {
    const { x = 0, y = 0, width = 0, height = 0, fill, payload = {}, dataKey = '' } = props as SegmentShapeProps;
    if (height <= 0) return <g />;
    const index = keys.indexOf(dataKey);
    const isTop = keys.slice(index + 1).every((k) => !Number(payload[k] ?? 0));
    const isBottom = keys.slice(0, index).every((k) => !Number(payload[k] ?? 0));
    const gap = isBottom ? 0 : 2;
    const h = Math.max(0, height - gap);
    const r = isTop ? Math.min(4, h, width / 2) : 0;
    const top = y;
    const path = `M${x},${top + h} L${x},${top + r} Q${x},${top} ${x + r},${top} L${x + width - r},${top} Q${x + width},${top} ${x + width},${top + r} L${x + width},${top + h} Z`;
    return <path d={path} fill={fill} />;
  };
}

export function TimeBarChart({
  data,
  series,
  stacked,
  format,
}: {
  data: Array<Record<string, string | number>>;
  series: SeriesDef[];
  stacked?: boolean;
  format?: (v: number) => string;
}) {
  const keys = series.map((s) => s.key);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: -8 }} barCategoryGap="30%">
        <CartesianGrid vertical={false} stroke={GRID} />
        <XAxis dataKey="date" tickFormatter={shortDate} minTickGap={28} {...axisProps} />
        <YAxis allowDecimals={false} tickFormatter={(v) => compact(Number(v))} width={48} {...axisProps} axisLine={false} />
        <Tooltip cursor={{ fill: 'rgba(255,255,255,0.04)' }} content={(p) => <ChartTooltip {...(p as object)} series={series} format={format} />} />
        {series.map((s) => (
          <Bar
            key={s.key}
            dataKey={s.key}
            stackId={stacked ? 'stack' : undefined}
            fill={SERIES[s.slot]}
            maxBarSize={24}
            radius={stacked ? undefined : [4, 4, 0, 0]}
            shape={stacked ? stackSegment(keys) : undefined}
            isAnimationActive={false}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

/** Ranked horizontal bars in HTML (category list). Single series → one hue, value at the tip. */
export function RankBars({ items, format = compact, slot = 0 }: { items: Array<{ label: string; value: number }>; format?: (v: number) => string; slot?: number }) {
  const max = Math.max(1, ...items.map((i) => i.value));
  if (!items.length) return <div className="grid h-full place-items-center text-[12px] text-muted">No data in range</div>;
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.label} className="grid grid-cols-[120px_1fr] items-center gap-3 text-[12px]" title={`${item.label}: ${format(item.value)}`}>
          <span className="truncate text-ink-2">{item.label}</span>
          <span className="flex items-center gap-2">
            <span className="h-3 rounded-r-[4px]" style={{ width: `${Math.max(2, (item.value / max) * 100)}%`, background: SERIES[slot], maxWidth: 'calc(100% - 56px)' }} />
            <span className="tabular text-ink">{format(item.value)}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ----------------------------- tiles ----------------------------- */

export function StatTile({ label, value, hint, tone }: { label: string; value: ReactNode; hint?: ReactNode; tone?: 'good' | 'critical' }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-4">
      <div className="text-[12px] text-muted">{label}</div>
      <div className="mt-1.5 text-[26px] font-semibold tracking-[-0.02em]">{value}</div>
      {hint && <div className={`mt-0.5 text-[12px] ${tone === 'good' ? 'text-good' : tone === 'critical' ? 'text-critical' : 'text-muted'}`}>{hint}</div>}
    </div>
  );
}

export function HeroFigure({ label, value, hint }: { label: string; value: ReactNode; hint?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5">
      <div className="text-[13px] text-muted">{label}</div>
      <div className="mt-2 text-[52px] font-semibold leading-none tracking-[-0.035em]">{value}</div>
      {hint && <div className="mt-2 text-[12px] text-muted">{hint}</div>}
    </div>
  );
}
