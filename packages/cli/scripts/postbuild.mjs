import fs from "node:fs";

const f = new URL("../dist/cli.js", import.meta.url);
let b = fs.readFileSync(f);

const sh = Buffer.from("#!/usr/bin/node\n");
if (!b.subarray(0, sh.length).equals(sh)) b = Buffer.concat([sh, b]);

fs.writeFileSync(f, b);
fs.chmodSync(f, 0o755);
