import { deflateRawSync } from "node:zlib";

/**
 * Minimal deterministic ZIP writer (store/deflate) with:
 * - fixed timestamps (DOS epoch 1980-01-01 00:00)
 * - stable ordering (caller provides ordered entries)
 * - stable perms/attrs (0644 files, 0755 dirs)
 *
 * Not a full ZIP library: sufficient for SIGILLARIUM bundles.
 */

type Entry = {
  path: string;              // posix, no leading slash
  data: Uint8Array;          // file bytes (empty for dirs)
  mode?: number;             // unix mode bits
  method?: 0 | 8;            // 0=store, 8=deflate
};

const DOS_TIME = 0; // 00:00:00
const DOS_DATE = (1 << 5) | 1; // 1980-01-01 => (year-1980)<<9 | (month)<<5 | (day)

function u16(n: number) {
  const b = Buffer.alloc(2);
  b.writeUInt16LE(n & 0xffff, 0);
  return b;
}
function u32(n: number) {
  const b = Buffer.alloc(4);
  b.writeUInt32LE(n >>> 0, 0);
  return b;
}

function crc32(buf: Uint8Array): number {
  // small, deterministic CRC32 (IEEE) implementation
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i]!;
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return (c ^ 0xffffffff) >>> 0;
}

function normalizePath(p: string) {
  if (!p || p.includes("\\") || p.startsWith("/")) throw new Error("zipDeterministic: invalid path");
  if (p.includes("..")) throw new Error("zipDeterministic: path traversal");
  return p;
}

export function zipDeterministic(entries: Entry[]): Uint8Array {
  // caller must provide deterministic ordering; enforce stable sort as a backstop
  const sorted = [...entries].sort((a,b)=>a.path.localeCompare(b.path));

  const locals: Buffer[] = [];
  const centrals: Buffer[] = [];
  let offset = 0;

  for (const e of sorted) {
    const path = normalizePath(e.path);
    const isDir = path.endsWith("/");
    const mode = e.mode ?? (isDir ? 0o755 : 0o644);
    const method: 0|8 = e.method ?? (isDir ? 0 : 8);

    const nameBuf = Buffer.from(path, "utf8");
    const data = isDir ? new Uint8Array() : e.data;

    const compressed =
      method === 8 && data.length
        ? new Uint8Array(deflateRawSync(Buffer.from(data), { level: 9 }))
        : data;

    const ccrc = crc32(data);
    const usize = data.length >>> 0;
    const csize = compressed.length >>> 0;

    // Local file header
    const local = Buffer.concat([
      u32(0x04034b50),
      u16(20),               // version needed
      u16(0),                // flags
      u16(method),
      u16(DOS_TIME),
      u16(DOS_DATE),
      u32(ccrc),
      u32(csize),
      u32(usize),
      u16(nameBuf.length),
      u16(0),                // extra len
      nameBuf,
      Buffer.from(compressed),
    ]);
    locals.push(local);

    // Central directory header
    const extAttr = ((mode & 0xffff) << 16) >>> 0;
    const central = Buffer.concat([
      u32(0x02014b50),
      u16(20),               // version made by
      u16(20),               // version needed
      u16(0),                // flags
      u16(method),
      u16(DOS_TIME),
      u16(DOS_DATE),
      u32(ccrc),
      u32(csize),
      u32(usize),
      u16(nameBuf.length),
      u16(0),                // extra
      u16(0),                // comment
      u16(0),                // disk start
      u16(0),                // internal attrs
      u32(extAttr),
      u32(offset),
      nameBuf,
    ]);
    centrals.push(central);

    offset += local.length;
  }

  const centralStart = offset;
  const centralBuf = Buffer.concat(centrals);
  offset += centralBuf.length;

  const eocd = Buffer.concat([
    u32(0x06054b50),
    u16(0), u16(0),                    // disk numbers
    u16(sorted.length), u16(sorted.length),
    u32(centralBuf.length),
    u32(centralStart),
    u16(0),                            // comment len
  ]);

  return new Uint8Array(Buffer.concat([...locals, centralBuf, eocd]));
}
