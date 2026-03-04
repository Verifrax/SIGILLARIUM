import { manifest } from "../dist/manifest.js";

const b = new Uint8Array([0,1,2,3,4,5,6,7,8,9]);
const m = manifest(b);

if (m.sigillarium !== "SIGILLARIUM") process.exit(10);
if (m.version !== 1) process.exit(11);
if (m.artifact.bytes !== 10) process.exit(12);
if (typeof m.artifact.sha256 !== "string" || m.artifact.sha256.length !== 64) process.exit(13);

console.log("ok");
