/**
 * Determinism guardrails for @sigillarium/core.
 * No locale/timezone dependent behavior is allowed in public operations.
 */
export function enforceDeterminismEnv(): void {
  // Prefer explicit invariants; callers/CLI can override by setting env *before* import.
  if (!process.env.TZ) process.env.TZ = "UTC";
  if (!process.env.LC_ALL) process.env.LC_ALL = "C";
  if (!process.env.LANG) process.env.LANG = "C";
}
