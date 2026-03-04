import fs from "node:fs";

const f = new URL("../dist/cli.js", import.meta.url);
let b = fs.readFileSync(f);

// strip UTF-8 BOM if any
if (b.length >= 3 && b[0] === 0xef && b[1] === 0xbb && b[2] === 0xbf) b = b.subarray(3);

// strip any leading whitespace/newlines (must start with #!)
while (b.length && (b[0] === 0x0a || b[0] === 0x0d || b[0] === 0x20 || b[0] === 0x09)) b = b.subarray(1);

const sh = Buffer.from("#!/usr/bin/env node\n");
if (!b.subarray(0, sh.length).equals(sh)) b = Buffer.concat([sh, b]);

fs.writeFileSync(f, b);
fs.chmodSync(f, 0o755);
