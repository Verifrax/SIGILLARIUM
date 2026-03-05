/**
 * SIGILLARIUM BUNDLE SCHEMA v1 (FROZEN)
 */
export const SCHEMA_VERSION = "v1" as const;

/**
 * Protocol version exposed in manifests/roots for schema v1.
 * Must remain `1` for v1 forever.
 */
export const SIGILLARIUM_VERSION = 1 as const;

export const BUNDLE_PATHS = {
  manifest: "sigillarium.manifest.json",
  payload: "payload.zip",
  artifactOriginal: "artifact.original",
  artifactSha256: "artifact.sha256",
  verifyTxt: "VERIFY.txt",
  root: "sigillarium.root.json",
} as const;

export const BUNDLE_REQUIRED = [
  BUNDLE_PATHS.manifest,
  BUNDLE_PATHS.payload,
  BUNDLE_PATHS.verifyTxt,
  BUNDLE_PATHS.root,
] as const;

export type ManifestV1 = {
  sigillarium: "SIGILLARIUM";
  version: typeof SIGILLARIUM_VERSION;
  artifact: {
    path: string;
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
