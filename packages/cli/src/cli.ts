import { readFileSync } from "node:fs";

function out(msg: string) { process.stdout.write(msg + "\n"); }
function die(msg: string, code = 2): never { process.stderr.write(msg + "\n"); process.exit(code); }

const [cmd, arg] = process.argv.slice(2);

if (!cmd || cmd === "-h" || cmd === "--help" || cmd === "help") {
  out("sigillarium <seal|verify|inspect> <path>");
  process.exit(0);
}

if (!arg) die("missing path", 2);

const _bytes = readFileSync(arg);

switch (cmd) {
  case "seal":
  case "verify":
  case "inspect":
    die("NOT_IMPLEMENTED", 3);
  default:
    die("unknown command", 2);
}
