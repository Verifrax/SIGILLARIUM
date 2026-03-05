import { BUNDLE_PATHS, SIGILLARIUM_VERSION } from "./schema/v1.js";
import { sha256Hex } from "./util.js";
export function manifest(bytes) {
    return {
        sigillarium: "SIGILLARIUM",
        version: SIGILLARIUM_VERSION,
        artifact: {
            path: BUNDLE_PATHS.artifactOriginal,
            sha256: sha256Hex(bytes),
            bytes: bytes.byteLength,
        },
    };
}
