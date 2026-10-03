import type { TtsVoice } from '@mascot/shared';
import type { AppConfig } from '../../config/app-config';
import { ProviderError } from '../../common/errors';
import { fetchWithTimeout, isRetryableStatus } from '../../common/utils/http';
import { silentSpeech } from '../media/ffmpeg';

export interface TtsProvider {
  readonly name: string;
  synthesize(text: string, voice: TtsVoice): Promise<{ audio: Buffer; costMicros: number }>;
}

export const TTS_PROVIDER = Symbol('TTS_PROVIDER');

/** OpenAI speech synthesis (POST /audio/speech) with a character-voice instruction. */
export class OpenAiTtsProvider implements TtsProvider {
  readonly name = 'openai-tts';

  constructor(private readonly config: AppConfig) {}

  async synthesize(text: string, voice: TtsVoice): Promise<{ audio: Buffer; costMicros: number }> {
    const res = await fetchWithTimeout(`${this.config.OPENAI_BASE_URL}/audio/speech`, {
      provider: this.name,
      method: 'POST',
      timeoutMs: 60_000,
      headers: { Authorization: `Bearer ${this.config.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: this.config.OPENAI_TTS_MODEL,
        voice,
        input: text.slice(0, 1000),
        response_format: 'mp3',
        instructions: 'Speak like an upbeat, charismatic animated character: expressive, clear and friendly.',
      }),
    });
    if (!res.ok) throw new ProviderError(this.name, `HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`, res.status, isRetryableStatus(res.status));
    // ≈ $0.015 per minute of audio; ~15 chars per second of speech.
    const costMicros = Math.round((text.length / 15 / 60) * 15_000);
    return { audio: Buffer.from(await res.arrayBuffer()), costMicros };
  }
}

export class MockTtsProvider implements TtsProvider {
  readonly name = 'mock-tts';

  async synthesize(text: string): Promise<{ audio: Buffer; costMicros: number }> {
    return { audio: await silentSpeech(Math.min(20, Math.max(1.5, text.length / 15))), costMicros: 0 };
  }
}
