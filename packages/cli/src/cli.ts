import { readFileSync } from "node:fs";

function die(msg: string): never {
  process.stderr.write(msg + "\n");
  process.exit(2);
}

const [cmd, arg] = process.argv.slice(2);

if (!cmd) die("usage: sigillarium <seal|verify|inspect> <path>");

if (!arg) die("missing path");

const _bytes = readFileSync(arg);

switch (cmd) {
  case "seal":
  case "verify":
  case "inspect":
    die("NOT_IMPLEMENTED");
  default:
    die("unknown command");
}
