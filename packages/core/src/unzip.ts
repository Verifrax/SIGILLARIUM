import { inflateRawSync } from "node:zlib";

export type ZipEntry = { path: string; method: number; compSize: number; size: number; crc32: number; offset: number };

function u16(b: Uint8Array, o: number) { return b[o] | (b[o+1] << 8); }
function u32(b: Uint8Array, o: number) { return (b[o] | (b[o+1] << 8) | (b[o+2] << 16) | (b[o+3] << 24)) >>> 0; }

export function listZipEntries(zip: Uint8Array): ZipEntry[] {
  const b = zip;
  const max = Math.max(0, b.length - 66000);
  let eocd = -1;
  for (let i = b.length - 22; i >= max; i--) {
    if (u32(b, i) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) throw new Error("INVALID_ZIP_EOCD");
  const cdSize = u32(b, eocd + 12);
  const cdOff  = u32(b, eocd + 16);

  const out: ZipEntry[] = [];
  let p = cdOff;
  const end = cdOff + cdSize;
  while (p < end) {
    if (u32(b, p) !== 0x02014b50) throw new Error("INVALID_ZIP_CDH");
    const method = u16(b, p + 10);
    const crc32  = u32(b, p + 16);
    const compSize = u32(b, p + 20);
    const size     = u32(b, p + 24);
    const nameLen  = u16(b, p + 28);
    const extraLen = u16(b, p + 30);
    const commLen  = u16(b, p + 32);
    const lho      = u32(b, p + 42);
    const name = Buffer.from(b.slice(p + 46, p + 46 + nameLen)).toString("utf8");
    out.push({ path: name, method, compSize, size, crc32, offset: lho });
    p = p + 46 + nameLen + extraLen + commLen;
  }
  return out.sort((a,b)=>a.path.localeCompare(b.path));
}

export function extractZipEntry(zip: Uint8Array, entry: ZipEntry): Uint8Array {
  const b = zip;

  const p = entry.offset;
  if (u32(b, p) !== 0x04034b50) throw new Error("INVALID_ZIP_LH");

  const nameLen  = u16(b, p + 26);
  const extraLen = u16(b, p + 28);
  const dataOff  = p + 30 + nameLen + extraLen;

  const comp = b.slice(dataOff, dataOff + entry.compSize);

  if (entry.method === 0) return comp; // stored
  if (entry.method === 8) return inflateRawSync(comp); // deflate
  throw new Error("UNSUPPORTED_ZIP_METHOD");
}
