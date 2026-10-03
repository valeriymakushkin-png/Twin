/**
 * Video templates. A template defines motion prompt, duration and whether a
 * voice-over script is required (TTS is muxed with ffmpeg after generation).
 */
export const VIDEO_TEMPLATES = ['dancing', 'talking', 'walking', 'podcast', 'promo'] as const;

export type VideoTemplate = (typeof VIDEO_TEMPLATES)[number];

export const VIDEO_PROVIDERS = ['kling', 'runway', 'veo', 'mock'] as const;
export type VideoProviderName = (typeof VIDEO_PROVIDERS)[number];

export const VIDEO_ASPECT_RATIOS = ['9:16', '1:1', '16:9'] as const;
export type VideoAspectRatio = (typeof VIDEO_ASPECT_RATIOS)[number];

export const TTS_VOICES = ['alloy', 'ash', 'coral', 'echo', 'nova', 'sage', 'shimmer'] as const;
export type TtsVoice = (typeof TTS_VOICES)[number];

export interface VideoTemplateRecipe {
  key: VideoTemplate;
  label: string;
  description: string;
  durationSec: 5 | 10;
  motion: string;
  scene: string;
  /** Requires a voice-over script (TTS). */
  scriptMode: 'none' | 'optional' | 'required';
  maxScriptChars: number;
  /** Credits charged against the monthly video allowance. */
  cost: number;
}

export const VIDEO_TEMPLATE_CATALOG: Record<VideoTemplate, VideoTemplateRecipe> = {
  dancing: {
    key: 'dancing',
    label: 'Dancing',
    description: 'Viral dance loop',
    durationSec: 5,
    motion: 'the character performs an energetic trendy dance with rhythmic arm and hip movements, smooth looping motion, camera static',
    scene: 'colorful party stage with soft spotlights',
    scriptMode: 'none',
    maxScriptChars: 0,
    cost: 1,
  },
  talking: {
    key: 'talking',
    label: 'Talking',
    description: 'Your mascot says your words',
    durationSec: 5,
    motion: 'the character talks directly to camera with natural mouth movement, expressive eyebrows and small hand gestures, subtle head motion',
    scene: 'cozy creator room with soft background blur',
    scriptMode: 'required',
    maxScriptChars: 220,
    cost: 1,
  },
  walking: {
    key: 'walking',
    label: 'Walking',
    description: 'Main-character walk',
    durationSec: 5,
    motion: 'the character walks confidently toward the camera with a slight bounce, tracking shot, hair moving naturally',
    scene: 'stylised city street at golden hour',
    scriptMode: 'none',
    maxScriptChars: 0,
    cost: 1,
  },
  podcast: {
    key: 'podcast',
    label: 'Podcast clip',
    description: 'Talking-head podcast moment',
    durationSec: 10,
    motion: 'the character speaks into a studio microphone, nodding and gesturing while explaining, slow push-in camera',
    scene: 'podcast studio with acoustic panels, warm practical lights and a broadcast microphone',
    scriptMode: 'required',
    maxScriptChars: 420,
    cost: 2,
  },
  promo: {
    key: 'promo',
    label: 'Promo',
    description: 'Personal brand promo',
    durationSec: 5,
    motion: 'dynamic hero reveal: the character turns to camera, smiles and points, energetic camera orbit',
    scene: 'bold gradient background with light streaks',
    scriptMode: 'optional',
    maxScriptChars: 220,
    cost: 1,
  },
};
