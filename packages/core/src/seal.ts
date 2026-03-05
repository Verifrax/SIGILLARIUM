import { BUNDLE_PATHS, SIGILLARIUM_VERSION, type SigillariumRoot } from "./schema/v1.js";
import { isoUtcNow, sha256Hex } from "./util.js";
import { manifest as makeManifest } from "./manifest.js";
import { zipDeterministic } from "./zip.js";

function txt(s: string): Uint8Array {
  return Buffer.from(s, "utf8");
}

export function seal(bytes: Uint8Array): Uint8Array {
  const m = makeManifest(bytes);

  const verifyTxt =
    "SIGILLARIUM v1\\n" +
    "Deterministic universal artifact sealing protocol.\\n" +
    "Verify: recompute artifact sha256 and compare to manifest.\\n";

  const root: SigillariumRoot = {
    sigillarium: "SIGILLARIUM",
    version: SIGILLARIUM_VERSION,
    created_at: "2000-01-01T00:00:00.000Z",
    bundle_sha256: "0".repeat(64),
  };

  // first pass zip (bundle sha filled after)
  let zip = zipDeterministic([
    { path: BUNDLE_PATHS.artifactOriginal, data: bytes },
    { path: BUNDLE_PATHS.artifactSha256, data: txt(m.artifact.sha256 + "\\n") },
    { path: BUNDLE_PATHS.manifest, data: txt(JSON.stringify(m, null, 2) + "\\n") },
    { path: BUNDLE_PATHS.verifyTxt, data: txt(verifyTxt) },
    { path: BUNDLE_PATHS.root, data: txt(JSON.stringify(root, null, 2) + "\\n") },
  ]);

  const bundleSha = sha256Hex(zip);
  root.bundle_sha256 = bundleSha;

  // final deterministic rebuild with bundle_sha256 filled
  zip = zipDeterministic([
    { path: BUNDLE_PATHS.artifactOriginal, data: bytes },
    { path: BUNDLE_PATHS.artifactSha256, data: txt(m.artifact.sha256 + "\\n") },
    { path: BUNDLE_PATHS.manifest, data: txt(JSON.stringify(m, null, 2) + "\\n") },
    { path: BUNDLE_PATHS.verifyTxt, data: txt(verifyTxt) },
    { path: BUNDLE_PATHS.root, data: txt(JSON.stringify(root, null, 2) + "\\n") },
  ]);

  return zip;
}
