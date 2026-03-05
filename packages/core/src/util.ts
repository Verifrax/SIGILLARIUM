import { createHash } from "node:crypto";

export function sha256Hex(bytes: Uint8Array): string {
  return createHash("sha256").update(bytes).digest("hex");
}

export function isoUtcNow(): string {
  return new Date().toISOString();
}


export function stableStringify(x: unknown): string {
  const seen = new WeakSet<object>();
  const norm = (v: any): any => {
    if (v && typeof v === "object") {
      if (seen.has(v)) throw new TypeError("cycle");
      seen.add(v);
      if (Array.isArray(v)) return v.map(norm);
      const out: any = {};
      for (const k of Object.keys(v).sort()) out[k] = norm(v[k]);
      return out;
    }
    return v;
  };
  return JSON.stringify(norm(x));
}
