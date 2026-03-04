export declare const SIGILLARIUM_VERSION: 1;
export declare const BUNDLE_PATHS: Readonly<{
    artifactOriginal: "artifact/original";
    artifactSha256: "artifact/sha256.txt";
    manifest: "manifest/manifest.json";
    certificate: "certificate/certificate.json";
    proof: "proof/proof.json";
    receipt: "receipt/receipt.json";
    verifyTxt: "verify/VERIFY.txt";
    root: "SIGILLARIUM.json";
}>;
export declare const BUNDLE_REQUIRED: readonly ("artifact/original" | "artifact/sha256.txt" | "manifest/manifest.json" | "verify/VERIFY.txt" | "SIGILLARIUM.json")[];
export declare const BUNDLE_OPTIONAL: readonly ("certificate/certificate.json" | "proof/proof.json" | "receipt/receipt.json")[];
export type Sha256Hex = string;
export type SigillariumRoot = {
    sigillarium: "SIGILLARIUM";
    version: typeof SIGILLARIUM_VERSION;
    created_at: string;
    bundle_sha256: Sha256Hex;
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
