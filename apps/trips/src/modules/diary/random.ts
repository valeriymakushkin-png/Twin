/** Небольшой генератор случайных чисел с зерном (mulberry32): одно зерно — одна и та же последовательность. */
export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Выбор формулировки из набора. Уже использованные в этом дневнике варианты пропускаются, пока есть неиспользованные,
 * — так тексты не повторяются. Возвращает шаблон; подстановку делает вызывающий.
 */
export class Picker {
  private used = new Set<string>();
  constructor(private random: () => number) {}

  pick(id: string, variants: readonly string[]): string {
    const free = variants.map((v, i) => [v, i] as const).filter(([, i]) => !this.used.has(`${id}:${i}`));
    const pool = free.length ? free : variants.map((v, i) => [v, i] as const);
    const [text, index] = pool[Math.floor(this.random() * pool.length)]!;
    this.used.add(`${id}:${index}`);
    return text;
  }

  /** Истина с вероятностью p — для необязательных предложений. */
  chance(p: number): boolean {
    return this.random() < p;
  }
}
