import { z } from "zod";

/**
 * Well-known audio file extensions producers commonly emit. Use this as
 * a discovery aid (autocomplete, UI dropdowns) — the wire field accepts
 * any string so readers can choose to support more formats as they
 * evolve.
 */
export const KNOWN_AUDIO_EXTS = [
  "mp3",
  "ogg",
  "wav",
  "flac",
  "aac",
  "opus",
  "webm",
  "m4a",
] as const;
export type KnownAudioExt = (typeof KNOWN_AUDIO_EXTS)[number];

/**
 * Mixin: a single audio track URL plus metadata.
 *
 * In v2:
 *  - `audioUrl` is `.url()`-validated.
 *  - `audioExt` widened from the v1 enum of `"mp3" | "ogg"` to any
 *    string. Producers that emit unsupported extensions should expect
 *    readers to refuse / fall back rather than crash.
 */
export const WithAudioUrlsV2Schema = z.object({
  audioUrl: z.string().url().optional(),
  audioDurationSeconds: z.number().optional(),
  audioExt: z.string().optional(),
});
