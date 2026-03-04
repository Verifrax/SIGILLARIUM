import { BUNDLE_PATHS, BUNDLE_REQUIRED, type ManifestV1 } from "./schema/v1.js";
import { sha256Hex } from "./util.js";
import { extractZipEntry, listZipEntries } from "./unzip.js";

function getEntry(bundle: Uint8Array, path: string) {
  const e = listZipEntries(bundle).find(x => x.path === path);
  if (!e) throw new Error("MISSING_ENTRY:" + path);
  return e;
}

export function verify(bundle: Uint8Array): boolean {
  try {
    const paths = new Set(listZipEntries(bundle).map(e=>e.path));
    for (const p of BUNDLE_REQUIRED) if (!paths.has(p)) return false;

    const artifact = extractZipEntry(bundle, getEntry(bundle, BUNDLE_PATHS.artifactOriginal));
    const shaTxt = Buffer.from(extractZipEntry(bundle, getEntry(bundle, BUNDLE_PATHS.artifactSha256))).toString("utf8").trim();
    const manTxt = Buffer.from(extractZipEntry(bundle, getEntry(bundle, BUNDLE_PATHS.manifest))).toString("utf8").trim();
    const m = JSON.parse(manTxt) as ManifestV1;

    const h = sha256Hex(artifact);
    if (h !== shaTxt) return false;
    if (m?.artifact?.sha256 !== h) return false;

    return true;
  } catch {
    return false;
  }
}
