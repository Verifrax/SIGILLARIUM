import { BUNDLE_REQUIRED } from "./schema/v1.js";
import { listZipEntries } from "./unzip.js";

export function inspect(bundle: Uint8Array): Record<string, unknown> {
  const entries = listZipEntries(bundle).map(e=>({
    path: e.path,
    method: e.method,
    size: e.size,
    comp: e.compSize,
  }));

  const paths = new Set(entries.map(e=>e.path));
  const required = [...BUNDLE_REQUIRED];

  return {
    entries,
    required_present: required.every(p=>paths.has(p)),
    missing: required.filter(p=>!paths.has(p)),
  };
}
