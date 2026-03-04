import * as fs from "node:fs";
import { readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";
import { seal, verify, inspect } from "./vendor/core/dist/index.js";

function die(msg: string, code = 1): never {
  process.stderr.write(String(msg) + "\n");
  process.exit(code);
}

const args = process.argv.slice(2);
const [cmd, path] = args;

if (!cmd) die("usage: sigillarium <seal|verify|inspect> <path>", 2);
if (!path) die("missing path", 2);

if (cmd === "seal") {
  const bytes = new Uint8Array(readFileSync(path));
  const bundle = seal(bytes);
  const out = path + ".sigillarium.zip";
  if (fs.existsSync(out) && process.env.SIGILLARIUM_OVERWRITE !== "1") die("refuse overwrite (set SIGILLARIUM_OVERWRITE=1)", 12);
  writeFileSync(out, Buffer.from(bundle));
  process.stdout.write(out + "\n");
  process.exit(0);
}

if (cmd === "verify") {
  const bundle = new Uint8Array(readFileSync(path));
  const ok = verify(bundle);
  process.stdout.write(ok ? "OK\n" : "FAIL\n");
  process.exit(ok ? 0 : 11);
}

if (cmd === "inspect") {
  const bundle = new Uint8Array(readFileSync(path));
  const r = inspect(bundle);
  process.stdout.write(JSON.stringify({ file: basename(path), ...r }, null, 2) + "\n");
  process.exit(0);
}

die("unknown command", 2);
