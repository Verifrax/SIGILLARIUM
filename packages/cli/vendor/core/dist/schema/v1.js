export const SIGILLARIUM_VERSION = 1;
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
export const BUNDLE_REQUIRED = Object.freeze([
    BUNDLE_PATHS.artifactOriginal,
    BUNDLE_PATHS.artifactSha256,
    BUNDLE_PATHS.manifest,
    BUNDLE_PATHS.verifyTxt,
    BUNDLE_PATHS.root,
]);
export const BUNDLE_OPTIONAL = Object.freeze([
    BUNDLE_PATHS.certificate,
    BUNDLE_PATHS.proof,
    BUNDLE_PATHS.receipt,
]);
