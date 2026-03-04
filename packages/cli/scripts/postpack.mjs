import fs from "fs";
import path from "path";

const KEEP_TGZ    = process.env.SIGILLARIUM_KEEP_TGZ === "1";
const KEEP_VENDOR = process.env.SIGILLARIUM_KEEP_VENDOR === "1";

const cliRoot = new URL("../", import.meta.url).pathname.replace(/\/$/, "");

if (!KEEP_TGZ) {
  for (const f of fs.readdirSync(cliRoot)) {
    if (/^sigillarium-.*\.tgz$/.test(f)) fs.rmSync(path.join(cliRoot, f), { force: true });
  }
}
if (!KEEP_VENDOR) {
  fs.rmSync(path.join(cliRoot, "vendor"), { recursive: true, force: true });
}
