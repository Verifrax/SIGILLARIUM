import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

const KEEP_VENDOR = process.env.SIGILLARIUM_KEEP_VENDOR === "1";

const repoRoot = new URL("../../../", import.meta.url).pathname.replace(/\/$/, "");
const cliRoot  = new URL("../", import.meta.url).pathname.replace(/\/$/, "");

const src = `${repoRoot}/packages/core/`;
const dst = `${cliRoot}/vendor/core/`;

fs.rmSync(path.join(cliRoot, "vendor"), { recursive: true, force: true });
fs.mkdirSync(dst, { recursive: true });

execFileSync("rsync", ["-a","--delete",
  "--include=dist/***",
  "--include=package.json",
  "--include=LICENSE",
  "--include=README*",
  "--exclude=*",
  src, dst
], { stdio: "inherit" });

// enforce minimal publishable package shape
if (!fs.existsSync(path.join(dst, "package.json"))) throw new Error("VENDOR_CORE_MISSING_PACKAGE_JSON");
if (!fs.existsSync(path.join(dst, "dist", "index.js"))) throw new Error("VENDOR_CORE_MISSING_DIST");

if (!fs.existsSync(path.join(dst, "README.md"))) {
  fs.writeFileSync(path.join(dst, "README.md"), "Vendored @sigillarium/core for offline CLI install.\n");
}
if (!fs.existsSync(path.join(dst, "LICENSE"))) {
  fs.writeFileSync(path.join(dst, "LICENSE"), "SEE_ROOT_LICENSE\n");
}

void KEEP_VENDOR;

// SIGILLARIUM_VENDOR_CORE_PREPACK
import { mkdirSync } from "node:fs";
import { execSync } from "node:child_process";
{
  mkdirSync("dist/vendor", { recursive: true });
  execSync("rsync -a --delete ../core/dist/ dist/vendor/core/dist/", { stdio: "inherit" });
}
