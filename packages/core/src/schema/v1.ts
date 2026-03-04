export const SIGILLARIUM_VERSION = 1 as const;

export const BUNDLE_PATHS = Object.freeze({
  artifactOriginal: "artifact/original",
  artifactSha256: "artifact/sha256.txt",
  manifest: "manifest/manifest.json",
  certificate: "certificate/certificate.json",
  proof: "proof/proof.json",
  receipt: "receipt/receipt.json",
  verifyTxt: "verify/VERIFY.txt",
  root: "SIGILLARIUM.json",
});

export type Sha256Hex = string;

export type SigillariumRoot = {
  sigillarium: "SIGILLARIUM";
  version: typeof SIGILLARIUM_VERSION;
  created_at: string; // ISO8601 UTC
  bundle_sha256: Sha256Hex; // sha256 over canonical zip bytes (filled after build)
};

export type ManifestV1 = {
  sigillarium: "SIGILLARIUM";
  version: typeof SIGILLARIUM_VERSION;
  artifact: {
    path: typeof BUNDLE_PATHS.artifactOriginal;
    sha256: Sha256Hex;
    bytes: number;
  };
};

export type CertificateV1 = {
  sigillarium: "SIGILLARIUM";
  version: typeof SIGILLARIUM_VERSION;
  algorithm: "sha256";
  statement: "artifact sha256 matches manifest";
};

export type ProofV1 = {
  sigillarium: "SIGILLARIUM";
  version: typeof SIGILLARIUM_VERSION;
  type: "deterministic";
  method: "recompute+compare";
};

export type ReceiptV1 = {
  sigillarium: "SIGILLARIUM";
  version: typeof SIGILLARIUM_VERSION;
  result: "SEALED";
  artifact_sha256: Sha256Hex;
};
