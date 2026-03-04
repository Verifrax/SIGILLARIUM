import fs from "fs";
import { execFileSync } from "child_process";

const KEEP = process.env.SIGILLARIUM_KEEP_VENDOR === "1";

// scripts/ -> cli/ -> packages/ -> repo root
const repoRoot = new URL("../../../", import.meta.url).pathname.replace(/\/$/, "");
const cliRoot  = new URL("../", import.meta.url).pathname.replace(/\/$/, "");

const src = `${repoRoot}/packages/core/`;
const dst = `${cliRoot}/vendor/core/`;

fs.rmSync(`${cliRoot}/vendor`, { recursive: true, force: true });
fs.mkdirSync(dst, { recursive: true });

execFileSync("rsync", ["-a","--delete",
  "--include=dist/***",
  "--include=package.json",
  "--include=LICENSE",
  "--include=README*",
  "--exclude=*",
  src, dst
], { stdio: "inherit" });

void KEEP; // postpack controls cleanup
