import { z } from 'zod';
import { A as AssetUid, E as EntityUid } from './variable.v7.schema-D14Z7-jV.cjs';

/**
 * Well-known external audio providers. Use this as a discovery aid;
 * `provider` on the wire is `z.string()` so new providers can land
 * without a schema bump.
 */
declare const KNOWN_EXTERNAL_AUDIO_PROVIDERS: readonly ["youtube", "soundcloud", "vimeo", "bandcamp", "spotify"];
type KnownExternalAudioProvider = (typeof KNOWN_EXTERNAL_AUDIO_PROVIDERS)[number];
declare const AssetBaseV2Schema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
}>;
type AssetBaseV2 = z.infer<typeof AssetBaseV2Schema>;
declare const ImageAssetV2Schema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"image">;
    dimensions: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>;
type ImageAssetV2 = z.infer<typeof ImageAssetV2Schema>;
declare const VideoAssetV2Schema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    videoUrl: z.ZodOptional<z.ZodString>;
    videoDimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    type: z.ZodLiteral<"video">;
    dimensions: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "video";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}, {
    type: "video";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}>;
type VideoAssetV2 = z.infer<typeof VideoAssetV2Schema>;
declare const AudioAssetV2Schema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    audioUrl: z.ZodOptional<z.ZodString>;
    audioDurationSeconds: z.ZodOptional<z.ZodNumber>;
    audioExt: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"audio">;
}, "strip", z.ZodTypeAny, {
    type: "audio";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    audioUrl?: string | undefined;
    audioDurationSeconds?: number | undefined;
    audioExt?: string | undefined;
}, {
    type: "audio";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    audioUrl?: string | undefined;
    audioDurationSeconds?: number | undefined;
    audioExt?: string | undefined;
}>;
type AudioAssetV2 = z.infer<typeof AudioAssetV2Schema>;
/**
 * External-hosted audio reference — generalized in v2.
 *
 * v1 carried `youtubeVideoId` directly, hard-coding the asset to
 * YouTube. v2 splits it into `provider` (open string, see
 * `KNOWN_EXTERNAL_AUDIO_PROVIDERS`) and `externalId` (whatever the
 * provider uses to identify a track / video / episode). Readers
 * dispatch on `provider` to build the embed URL / call the right API.
 */
declare const AudioExternalAssetV2Schema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    type: z.ZodLiteral<"audio-external">;
    provider: z.ZodString;
    externalId: z.ZodString;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    durationSeconds: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "audio-external";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    provider: string;
    externalId: string;
    thumbnailUrl?: string | undefined;
    durationSeconds?: number | undefined;
}, {
    type: "audio-external";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    provider: string;
    externalId: string;
    thumbnailUrl?: string | undefined;
    durationSeconds?: number | undefined;
}>;
type AudioExternalAssetV2 = z.infer<typeof AudioExternalAssetV2Schema>;
declare const EntityAssetV2Schema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    type: z.ZodLiteral<"entity">;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
}, "strip", z.ZodTypeAny, {
    type: "entity";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}, {
    type: "entity";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}>;
type EntityAssetV2 = z.infer<typeof EntityAssetV2Schema>;
declare const AssetV2Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"image">;
    dimensions: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    videoUrl: z.ZodOptional<z.ZodString>;
    videoDimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    type: z.ZodLiteral<"video">;
    dimensions: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "video";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}, {
    type: "video";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    audioUrl: z.ZodOptional<z.ZodString>;
    audioDurationSeconds: z.ZodOptional<z.ZodNumber>;
    audioExt: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"audio">;
}, "strip", z.ZodTypeAny, {
    type: "audio";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    audioUrl?: string | undefined;
    audioDurationSeconds?: number | undefined;
    audioExt?: string | undefined;
}, {
    type: "audio";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    audioUrl?: string | undefined;
    audioDurationSeconds?: number | undefined;
    audioExt?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    type: z.ZodLiteral<"audio-external">;
    provider: z.ZodString;
    externalId: z.ZodString;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    durationSeconds: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "audio-external";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    provider: string;
    externalId: string;
    thumbnailUrl?: string | undefined;
    durationSeconds?: number | undefined;
}, {
    type: "audio-external";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    provider: string;
    externalId: string;
    thumbnailUrl?: string | undefined;
    durationSeconds?: number | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    type: z.ZodLiteral<"entity">;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
}, "strip", z.ZodTypeAny, {
    type: "entity";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}, {
    type: "entity";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}>]>;
type AssetV2 = z.infer<typeof AssetV2Schema>;

export { type AssetBaseV2 as A, type EntityAssetV2 as E, type ImageAssetV2 as I, KNOWN_EXTERNAL_AUDIO_PROVIDERS as K, type VideoAssetV2 as V, AssetBaseV2Schema as a, type AssetV2 as b, AssetV2Schema as c, type AudioAssetV2 as d, AudioAssetV2Schema as e, type AudioExternalAssetV2 as f, AudioExternalAssetV2Schema as g, EntityAssetV2Schema as h, ImageAssetV2Schema as i, type KnownExternalAudioProvider as j, VideoAssetV2Schema as k };
