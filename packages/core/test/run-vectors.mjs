import fs from "node:fs";
import crypto from "node:crypto";
import { seal } from "../dist/seal.js";

const VDIR = new URL("./vectors/", import.meta.url);

function sha256Hex(b){ return crypto.createHash("sha256").update(b).digest("hex"); }

function load(p){
  const v = JSON.parse(fs.readFileSync(p,"utf8"));
  if (v.files_base64) {
    // use first entry (single-artifact vectors)
    const [[_,b64]] = Object.entries(v.files_base64);
    return Buffer.from(String(b64), "base64");
  }
  if (v.files) {
    // use first entry
    const [[_,txt]] = Object.entries(v.files);
    return Buffer.from(String(txt), "utf8");
  }
  throw new Error("vector has no files/files_base64");
}

for (const f of fs.readdirSync(VDIR)) {
  if (!f.endsWith(".json")) continue;
  const bytes = load(new URL(f, VDIR));
  const bundle = seal(bytes);
  const out = Buffer.isBuffer(bundle) ? bundle : Buffer.from(bundle);
  console.log(`${f}\t${sha256Hex(out)}`);
}
