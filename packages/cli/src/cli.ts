import { seal, verify, inspect } from "../vendor/core/dist/index.js";

function usage(): void {
  console.log(`sigillarium <command> [path]

Commands:
  seal <file>       seal an artifact into a deterministic bundle
  verify <bundle>   verify a bundle offline
  inspect <bundle>  print bundle metadata
  help              show this help

Flags:
  -h, --help        show this help
`);
}

function fail(msg: string, code: number): never {
  console.error(msg);
  process.exit(code);
}

const argv = process.argv.slice(2);
const hasHelp = argv.includes("--help") || argv.includes("-h");
const filtered = argv.filter(a => a !== "--help" && a !== "-h");

const cmd = (filtered[0] || "help").toLowerCase();
const pathArg = filtered[1] || "";

if (hasHelp || cmd === "help") {
  usage();
  process.exit(0);
}

if (!pathArg) fail("missing path", 2);

async function main(): Promise<void> {
  if (cmd === "seal") {
    await seal(pathArg as any);
    return;
  }
  if (cmd === "verify") {
    await verify(pathArg as any);
    return;
  }
  if (cmd === "inspect") {
    await inspect(pathArg as any);
    return;
  }
  usage();
  process.exit(2);
}

main().catch((e) => fail(String(e && (e.stack || e.message || e)), 1));
