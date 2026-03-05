import { BUNDLE_PATHS, SIGILLARIUM_VERSION, type ManifestV1 } from "./schema/v1";
import { sha256Hex } from "./util.js";

export function manifest(bytes: Uint8Array): ManifestV1 {
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
