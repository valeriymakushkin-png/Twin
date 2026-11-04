/** Простая география без карт: расстояния и разбор координат. Чистые функции — покрыты тестами. */

export interface LatLng {
  lat: number;
  lng: number;
}

const R = 6371.0088; // средний радиус Земли, км
const rad = (d: number) => (d * Math.PI) / 180;

/** Расстояние по прямой между двумя точками (по большому кругу), км. */
export function haversineKm(a: LatLng, b: LatLng): number {
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

/** Убирает подряд идущие почти одинаковые точки (меньше `minKm` друг от друга) — «стоял на месте» не добавляет километров. */
export function dedupeConsecutive(points: LatLng[], minKm = 0.3): LatLng[] {
  const out: LatLng[] = [];
  for (const p of points) {
    const last = out[out.length - 1];
    if (!last || haversineKm(last, p) >= minKm) out.push(p);
  }
  return out;
}

/** Длина маршрута по прямым между последовательными точками, км. */
export function routeLengthKm(points: LatLng[]): number {
  let total = 0;
  for (let i = 1; i < points.length; i++) total += haversineKm(points[i - 1]!, points[i]!);
  return total;
}

const valid = (lat: number, lng: number): LatLng | null => (Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180 ? { lat, lng } : null);

/** «38°41'29.8"N 9°12'57.6"W» → число со знаком. */
function dms(text: string): LatLng | null {
  const parts = [...text.matchAll(/(\d{1,3})\s*[°ºd]\s*(?:(\d{1,2}(?:\.\d+)?)\s*['′m]\s*)?(?:(\d{1,2}(?:\.\d+)?)\s*(?:["″s]|'')\s*)?([NSEWСЮВЗ])/gi)];
  if (parts.length !== 2) return null;
  const value = (m: RegExpMatchArray) => {
    const v = Number(m[1]) + Number(m[2] ?? 0) / 60 + Number(m[3] ?? 0) / 3600;
    return { v: /[SЮWЗ]/i.test(m[4]!) ? -v : v, axis: /[NSСЮ]/i.test(m[4]!) ? 'lat' : 'lng' };
  };
  const [a, b] = [value(parts[0]!), value(parts[1]!)];
  if (a.axis === b.axis) return null;
  return valid(a.axis === 'lat' ? a.v : b.v, a.axis === 'lat' ? b.v : a.v);
}

/**
 * Достаёт координаты из текста, который пользователь скопировал: «38.6916, -9.2160», «38.6916 -9.2160»,
 * «N 38.6916 W 9.2160», «38°41'29"N 9°12'57"W», ссылки Google/Apple/Яндекс Карт и geo:-ссылки.
 * Порядок всегда «широта, долгота» (кроме Яндекса, где в ссылке сначала долгота — это учтено). Неразобранное → null.
 */
export function parseCoordinates(input: string): LatLng | null {
  const text = input.trim();
  if (!text) return null;
  const num = '(-?\\d{1,3}(?:\\.\\d+)?)';
  const pair = (re: RegExp, swap = false) => {
    const m = text.match(re);
    if (!m) return null;
    const a = Number(m[1]);
    const b = Number(m[2]);
    return swap ? valid(b, a) : valid(a, b);
  };
  // Ссылки: Google (@lat,lng; !3dLAT!4dLNG; ?q=lat,lng; ll=), Apple (ll=, coordinate=), geo:, Яндекс (ll=lng,lat; pt=lng,lat)
  const yandex = /yandex\.[a-z]+/i.test(text);
  const fromUrl =
    (yandex && (pair(new RegExp(`[?&](?:ll|pt)=${num}(?:,|%2C)${num}`)) && pair(new RegExp(`[?&](?:ll|pt)=${num}(?:,|%2C)${num}`), true))) ||
    pair(new RegExp(`!3d${num}!4d${num}`)) ||
    pair(new RegExp(`@${num},${num}`)) ||
    pair(new RegExp(`[?&](?:q|ll|coordinate|query|center|daddr|destination)=${num}(?:,|%2C)\\s*${num}`)) ||
    pair(new RegExp(`geo:${num},${num}`));
  if (fromUrl) return fromUrl;
  if (/^https?:\/\//i.test(text)) return null;
  const fromDms = dms(text);
  if (fromDms) return fromDms;
  // «N 38.69 W 9.21» / «38.69 N, 9.21 W»
  const hemi = [...text.matchAll(/([NSEWСЮВЗ])\s*(\d{1,3}(?:\.\d+)?)|(\d{1,3}(?:\.\d+)?)\s*°?\s*([NSEWСЮВЗ])/gi)];
  if (hemi.length === 2) {
    const read = (m: RegExpMatchArray) => {
      const letter = (m[1] ?? m[4])!;
      const v = Number(m[2] ?? m[3]);
      return { v: /[SЮWЗ]/i.test(letter) ? -v : v, axis: /[NSСЮ]/i.test(letter) ? 'lat' : 'lng' };
    };
    const [a, b] = [read(hemi[0]!), read(hemi[1]!)];
    if (a.axis !== b.axis) return valid(a.axis === 'lat' ? a.v : b.v, a.axis === 'lat' ? b.v : a.v);
  }
  // Просто два числа. Запятая как десятичный знак допустима, только если числа разделены «;» или пробелом:
  // «38,69; -9,21» и «38,69 -9,21» понятны, а «1,2,3» — нет.
  const dot = '-?\\d{1,3}(?:\\.\\d+)?';
  const comma = '-?\\d{1,3}(?:[.,]\\d+)?';
  const viaComma = text.match(new RegExp(`^\\(?\\s*(${dot})\\s*,\\s*(${dot})\\s*\\)?$`));
  const viaOther = text.match(new RegExp(`^\\(?\\s*(${comma})\\s*(?:;|\\s)\\s*(${comma})\\s*\\)?$`));
  const plain = viaComma ?? viaOther;
  if (plain) return valid(Number(plain[1]!.replace(',', '.')), Number(plain[2]!.replace(',', '.')));
  return null;
}

export const formatCoordinates = ({ lat, lng }: LatLng) => `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
