export const GENERATION_TYPES = [
  'AVATAR',
  'STYLE_VARIANT',
  'STICKER_PACK',
  'MEME',
  'PROFILE_PICTURE',
  'VIDEO',
] as const;
export type GenerationType = (typeof GENERATION_TYPES)[number];

export const GENERATION_STATUSES = ['QUEUED', 'PROCESSING', 'SUCCEEDED', 'FAILED', 'CANCELED'] as const;
export type GenerationStatus = (typeof GENERATION_STATUSES)[number];

/** Avatar pipeline stages, in order, with the progress (%) reached at the end of each stage. */
export const AVATAR_STAGES = [
  { key: 'UPLOADING', label: 'Uploading', description: 'Securing your photos', progress: 10 },
  { key: 'FACE_ANALYSIS', label: 'Face analysis', description: 'Detecting faces, pose and quality', progress: 30 },
  { key: 'FEATURE_EXTRACTION', label: 'Feature extraction', description: 'Building your Mascot DNA', progress: 50 },
  { key: 'CHARACTER_GENERATION', label: 'Character generation', description: 'Designing your character', progress: 85 },
  { key: 'RENDERING', label: 'Rendering', description: 'Final render & character card', progress: 100 },
] as const;
export type AvatarStage = (typeof AVATAR_STAGES)[number]['key'];

export const GENERIC_STAGES = ['QUEUED', 'GENERATING', 'POST_PROCESSING', 'PUBLISHING', 'DONE'] as const;
export type GenericStage = (typeof GENERIC_STAGES)[number];

export const PHOTO_POSES = ['FRONT', 'LEFT', 'RIGHT', 'SMILE', 'NEUTRAL', 'OTHER'] as const;
export type PhotoPose = (typeof PHOTO_POSES)[number];

export const UPLOAD_RULES = {
  minPhotos: 5,
  recommendedMin: 10,
  recommendedMax: 15,
  maxPhotos: 20,
  maxFileBytes: 15 * 1024 * 1024,
  acceptedMime: ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'] as const,
  /** Client-side downscale target before upload (longest side, px). */
  clientMaxDimension: 2048,
  minDimension: 384,
} as const;

export const PHOTO_GUIDE: ReadonlyArray<{ pose: PhotoPose; title: string; hint: string }> = [
  { pose: 'FRONT', title: 'Front face', hint: 'Look straight at the camera, face fully visible' },
  { pose: 'LEFT', title: 'Left profile', hint: 'Turn your head ~45° to the left' },
  { pose: 'RIGHT', title: 'Right profile', hint: 'Turn your head ~45° to the right' },
  { pose: 'SMILE', title: 'Smile', hint: 'A natural, big smile' },
  { pose: 'NEUTRAL', title: 'Neutral', hint: 'Relaxed face, mouth closed' },
];
