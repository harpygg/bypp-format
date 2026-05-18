import { z } from "zod";

/**
 * Mixin: a single audio track URL plus metadata.
 *
 * - `audioUrl` — playable URL.
 * - `audioDurationSeconds` — total runtime in seconds. Lets readers
 *   render duration / progress without having to decode the file.
 * - `audioExt` — file extension hint, for URLs that don't carry one in
 *   their path (e.g. signed URLs with query strings).
 *
 * All fields optional — a record without `audioUrl` is "no audio set".
 */
export const WithAudioUrlsV1Schema = z.object({
  audioUrl: z.string().optional(),
  audioDurationSeconds: z.number().optional(),
  audioExt: z.enum(["mp3", "ogg"]).optional(),
});
