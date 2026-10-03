/**
 * Outfits and poses. Premium items are gated by entitlements (plans.ts).
 */
export interface WardrobeItem {
  key: string;
  label: string;
  prompt: string;
  isPremium: boolean;
}

export const OUTFITS: readonly WardrobeItem[] = [
  { key: 'casual-hoodie', label: 'Hoodie', prompt: 'wearing a cozy oversized hoodie', isPremium: false },
  { key: 'tshirt', label: 'Tee', prompt: 'wearing a clean crew-neck t-shirt', isPremium: false },
  { key: 'denim-jacket', label: 'Denim', prompt: 'wearing a denim jacket over a white tee', isPremium: false },
  { key: 'streetwear', label: 'Streetwear', prompt: 'wearing premium streetwear: puffer vest, cargo pants, chunky sneakers', isPremium: true },
  { key: 'business-suit', label: 'Suit', prompt: 'wearing a tailored modern business suit', isPremium: true },
  { key: 'gamer', label: 'Gamer', prompt: 'wearing a gaming jersey and RGB headset around the neck', isPremium: true },
  { key: 'streamer', label: 'Streamer', prompt: 'wearing a varsity jacket with headphones and a studio microphone nearby', isPremium: true },
  { key: 'astronaut', label: 'Astronaut', prompt: 'wearing a sleek white astronaut suit, helmet off', isPremium: true },
  { key: 'superhero', label: 'Superhero', prompt: 'wearing an original superhero suit with a flowing cape, no logos', isPremium: true },
  { key: 'samurai', label: 'Samurai', prompt: 'wearing stylised samurai armor without helmet', isPremium: true },
  { key: 'wizard', label: 'Wizard', prompt: 'wearing a starry wizard robe and pointed hat', isPremium: true },
  { key: 'techwear', label: 'Techwear', prompt: 'wearing black techwear with glowing accents', isPremium: true },
];

export const POSES: readonly WardrobeItem[] = [
  { key: 'portrait', label: 'Portrait', prompt: 'head-and-shoulders portrait facing the camera', isPremium: false },
  { key: 'waving', label: 'Waving', prompt: 'friendly wave with one hand, upper body', isPremium: false },
  { key: 'thumbs-up', label: 'Thumbs up', prompt: 'giving a thumbs up, upper body', isPremium: false },
  { key: 'peace', label: 'Peace', prompt: 'making a peace sign next to the face', isPremium: true },
  { key: 'arms-crossed', label: 'Boss', prompt: 'arms crossed, confident stance, three-quarter view', isPremium: true },
  { key: 'pointing', label: 'Pointing', prompt: 'pointing at the viewer with a grin', isPremium: true },
  { key: 'gaming', label: 'Gaming', prompt: 'holding a game controller, focused and excited', isPremium: true },
  { key: 'jumping', label: 'Jump', prompt: 'mid-air jump with joyful energy, full body', isPremium: true },
  { key: 'hero', label: 'Hero', prompt: 'heroic low-angle full-body pose, wind in hair', isPremium: true },
  { key: 'selfie', label: 'Selfie', prompt: 'taking a selfie with a phone, playful face', isPremium: true },
];

export function getOutfit(key?: string | null): WardrobeItem | undefined {
  return key ? OUTFITS.find((o) => o.key === key) : undefined;
}

export function getPose(key?: string | null): WardrobeItem | undefined {
  return key ? POSES.find((p) => p.key === key) : undefined;
}
