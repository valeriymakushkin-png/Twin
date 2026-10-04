import {
  baseHairStyle,
  DANCE_IDS,
  describeDna,
  EYEWEAR_CATALOG,
  getEyewear,
  HAIR_STYLES,
  HAIRSTYLE_CATALOG,
  LEGACY_HAIR_KEY,
  MascotDnaSchema,
  resolveEyewear,
  resolveHairstyle,
  SHOWCASE_DNA,
  STICKER_EMOTIONS,
  EMOTION_CATALOG,
  UpdateLookSchema,
} from '@mascot/shared';

const dna = SHOWCASE_DNA[0]!.dna;

describe('look catalogs', () => {
  it('ships 200+ unique hairstyles for both genders', () => {
    expect(HAIRSTYLE_CATALOG.length).toBeGreaterThanOrEqual(200);
    expect(new Set(HAIRSTYLE_CATALOG.map((h) => h.key)).size).toBe(HAIRSTYLE_CATALOG.length);
    const women = HAIRSTYLE_CATALOG.filter((h) => h.gender !== 'male').length;
    const men = HAIRSTYLE_CATALOG.filter((h) => h.gender !== 'female').length;
    expect(women).toBeGreaterThanOrEqual(100);
    expect(men).toBeGreaterThanOrEqual(100);
  });

  it('maps every extracted base style to a catalog entry and back', () => {
    for (const style of HAIR_STYLES) {
      const def = resolveHairstyle({ hairStyle: style });
      expect(def.key).toBe(LEGACY_HAIR_KEY[style]);
    }
    for (const h of HAIRSTYLE_CATALOG) expect(HAIR_STYLES).toContain(baseHairStyle(h.look));
  });

  it('ships 100+ unique eyewear pairs and resolves picks', () => {
    expect(EYEWEAR_CATALOG.length).toBeGreaterThanOrEqual(100);
    expect(new Set(EYEWEAR_CATALOG.map((e) => e.key)).size).toBe(EYEWEAR_CATALOG.length);
    expect(resolveEyewear({ glasses: 'round', glassesKey: null })?.key).toBe('round-wire-gold');
    expect(resolveEyewear({ glasses: 'round', glassesKey: 'none' })).toBeNull();
    expect(resolveEyewear({ glasses: 'none', glassesKey: 'pilot-gold-green' })?.model).toBe('pilot');
  });

  it('puts picked hairstyle and eyewear into the identity prompt', () => {
    const picked = MascotDnaSchema.parse({ ...dna, hairKey: 'space-buns', glassesKey: 'heart-pink-rose' });
    const text = describeDna(picked);
    expect(text).toContain('space buns hairstyle');
    expect(text).toContain(getEyewear('heart-pink-rose')!.label.toLowerCase());
  });

  it('validates look updates', () => {
    expect(UpdateLookSchema.safeParse({}).success).toBe(false);
    expect(UpdateLookSchema.safeParse({ hairKey: 'wolf-cut' }).success).toBe(true);
    expect(UpdateLookSchema.safeParse({ glassesKey: null }).success).toBe(true);
  });

  it('has 50+ sticker emotions and original dances', () => {
    expect(STICKER_EMOTIONS.length).toBeGreaterThanOrEqual(50);
    for (const e of STICKER_EMOTIONS) expect(EMOTION_CATALOG[e].emoji).toBeTruthy();
    expect(DANCE_IDS.length).toBeGreaterThanOrEqual(10);
  });
});
