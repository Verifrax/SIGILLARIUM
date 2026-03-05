/**
 * SIGILLARIUM BUNDLE SCHEMA v1 (FROZEN)
 */

export const SCHEMA_VERSION = "v1" as const;
export const SIGILLARIUM_VERSION = SCHEMA_VERSION;

export const BUNDLE_PATHS = {
  manifest: "sigillarium.manifest.json",
  artifactOriginal: "artifact/original.bin",
  artifactSha256: "artifact/sha256.txt",
  verifyTxt: "verify/verify.txt",
  root: "root.json"
} as const;

export const BUNDLE_REQUIRED = [
  BUNDLE_PATHS.manifest,
  BUNDLE_PATHS.artifactOriginal,
  BUNDLE_PATHS.artifactSha256,
  BUNDLE_PATHS.verifyTxt,
  BUNDLE_PATHS.root
] as const;

export type ManifestV1 = {
  sigillarium: "SIGILLARIUM";
  version: typeof SIGILLARIUM_VERSION;
  artifact: {
    path: typeof BUNDLE_PATHS.artifactOriginal;
    sha256: string;
    bytes: number;
  };
};

export type SigillariumRoot = {
  sigillarium: "SIGILLARIUM";
  version: typeof SIGILLARIUM_VERSION;
  created_at: string;
  bundle_sha256: string;
};
