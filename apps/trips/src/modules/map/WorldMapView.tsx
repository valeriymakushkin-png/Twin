import { geoPath } from 'd3-geo';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ru } from '../../core/strings';
import { Icon } from '../../core/ui';
import type { Pin } from './stats';
import { mainLand, worldProjection, type World } from './world';

const W = 1000;
const H = 520;
const MAX_ZOOM = 14;

interface View {
  k: number;
  x: number;
  y: number;
}

/** Не даём «увезти» карту за край: она всегда закрывает видимую область. */
const clamp = (v: View): View => {
  const k = Math.min(MAX_ZOOM, Math.max(1, v.k));
  return { k, x: Math.min(0, Math.max(W - W * k, v.x)), y: Math.min(0, Math.max(H - H * k, v.y)) };
};

/**
 * Офлайн-карта мира: границы стран из встроенных данных, посещённые страны закрашены, города и места — значки.
 * Масштабируется колесом, щипком и кнопками, двигается перетаскиванием.
 */
export function WorldMapView({
  world,
  visited,
  planned,
  pins,
  selected,
  onSelect,
  selectedPin,
  onSelectPin,
}: {
  world: World;
  visited: Set<string>;
  planned: Set<string>;
  pins: Pin[];
  selected: string | null;
  onSelect: (code: string | null) => void;
  selectedPin: string | null;
  onSelectPin: (id: string | null) => void;
}) {
  const projection = useMemo(() => worldProjection(W, H), []);
  // Строки путей считаются один раз; при движении карты меняется только transform.
  const paths = useMemo(() => {
    const path = geoPath(projection);
    return world.countries.map((c) => ({ code: c.code, name: c.name, d: path(c.feature) ?? '' }));
  }, [world, projection]);
  const placed = useMemo(() => pins.flatMap((p) => { const xy = projection([p.lng, p.lat]); return xy ? [{ ...p, x: xy[0], y: xy[1] }] : []; }), [pins, projection]);

  const [view, setView] = useState<View>({ k: 1, x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const moved = useRef(false);
  const start = useRef({ x: 0, y: 0 });

  const toSvg = (clientX: number, clientY: number) => {
    const r = svgRef.current!.getBoundingClientRect();
    return { x: ((clientX - r.left) * W) / r.width, y: ((clientY - r.top) * H) / r.height };
  };
  const zoomAt = (px: number, py: number, factor: number) =>
    setView((v) => {
      const k = Math.min(MAX_ZOOM, Math.max(1, v.k * factor));
      const f = k / v.k;
      return clamp({ k, x: px - (px - v.x) * f, y: py - (py - v.y) * f });
    });

  // Колесо мыши: слушатель добавляется вручную, чтобы отключить прокрутку страницы (в React он «пассивный»).
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const p = toSvg(e.clientX, e.clientY);
      zoomAt(p.x, p.y, Math.exp(-e.deltaY * 0.0018));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 1) {
      moved.current = false;
      start.current = { x: e.clientX, y: e.clientY };
    }
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    const r = svgRef.current!.getBoundingClientRect();
    const sx = W / r.width;
    const sy = H / r.height;
    if (pointers.current.size === 1) {
      const dx = e.clientX - prev.x;
      const dy = e.clientY - prev.y;
      // Сдвиг больше нескольких пикселей — это перетаскивание, а не тап; тап по стране выбирает её.
      if (!moved.current && Math.hypot(e.clientX - start.current.x, e.clientY - start.current.y) > 5) {
        moved.current = true;
        // Захват указателя включаем только на перетаскивании: иначе ломается клик по стране/значку.
        svgRef.current?.setPointerCapture?.(e.pointerId);
      }
      if (moved.current) setView((v) => clamp({ ...v, x: v.x + dx * sx, y: v.y + dy * sy }));
    } else if (pointers.current.size === 2) {
      const other = [...pointers.current.entries()].find(([id]) => id !== e.pointerId)![1];
      const before = Math.hypot(prev.x - other.x, prev.y - other.y);
      const after = Math.hypot(e.clientX - other.x, e.clientY - other.y);
      const mid = toSvg((e.clientX + other.x) / 2, (e.clientY + other.y) / 2);
      if (before > 0) zoomAt(mid.x, mid.y, after / before);
      moved.current = true;
    }
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
  };
  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
  };

  // Выбранная страна (тапом или из списка) приближается, чтобы маленькие страны было видно.
  useEffect(() => {
    if (!selected) return;
    const c = world.countries.find((x) => x.code === selected);
    if (!c) return;
    const [[x0, y0], [x1, y1]] = geoPath(projection).bounds(mainLand(c.feature));
    const w = Math.max(x1 - x0, 1);
    const h = Math.max(y1 - y0, 1);
    const k = Math.min(9, Math.max(1.5, Math.min((0.6 * W) / w, (0.6 * H) / h)));
    setView(clamp({ k, x: W / 2 - ((x0 + x1) / 2) * k, y: H / 2 - ((y0 + y1) / 2) * k }));
  }, [selected, world, projection]);

  const strokeW = 0.6 / view.k;
  return (
    <div className="worldmap">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={ru.map.title}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={(e) => {
          const p = toSvg(e.clientX, e.clientY);
          zoomAt(p.x, p.y, 2);
        }}
      >
        <rect width={W} height={H} className="sea" onClick={() => !moved.current && (onSelect(null), onSelectPin(null))} />
        <g transform={`translate(${view.x} ${view.y}) scale(${view.k})`}>
          {paths.map((p, i) => (
            <path
              key={p.code ?? `${p.name}-${i}`}
              d={p.d}
              data-code={p.code}
              className={`land ${p.code && visited.has(p.code) ? 'visited' : p.code && planned.has(p.code) ? 'planned' : ''} ${p.code && p.code === selected ? 'selected' : ''}`}
              strokeWidth={strokeW}
              onClick={() => !moved.current && onSelect(p.code && p.code !== selected ? p.code : null)}
            >
              <title>{p.name}</title>
            </path>
          ))}
          {placed.map((p) => (
            <circle
              key={p.id}
              cx={p.x}
              cy={p.y}
              r={(p.kind === 'city' ? 5 : 3) / view.k ** 0.7}
              strokeWidth={1.6 / view.k}
              className={`pin ${p.kind} ${p.planned ? 'planned' : ''} ${selectedPin === p.id ? 'selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                if (!moved.current) onSelectPin(selectedPin === p.id ? null : p.id);
              }}
            >
              <title>{p.label}</title>
            </circle>
          ))}
        </g>
      </svg>
      <div className="map-controls">
        <button type="button" aria-label={ru.map.zoomIn} onClick={() => zoomAt(W / 2, H / 2, 1.7)}>
          <Icon name="plus" size={18} />
        </button>
        <button type="button" aria-label={ru.map.zoomOut} onClick={() => zoomAt(W / 2, H / 2, 1 / 1.7)}>
          <span aria-hidden="true" style={{ fontSize: 22, lineHeight: 1 }}>−</span>
        </button>
        <button type="button" aria-label={ru.map.reset} onClick={() => setView({ k: 1, x: 0, y: 0 })}>
          <Icon name="globe" size={18} />
        </button>
      </div>
    </div>
  );
}
