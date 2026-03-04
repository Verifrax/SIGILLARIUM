import { mkdirSync } from "node:fs";
import { join } from "node:path";
mkdirSync(join("dist"), { recursive: true });
