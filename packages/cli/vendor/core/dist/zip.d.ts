/**
 * Minimal deterministic ZIP writer (store/deflate) with:
 * - fixed timestamps (DOS epoch 1980-01-01 00:00)
 * - stable ordering (caller provides ordered entries)
 * - stable perms/attrs (0644 files, 0755 dirs)
 *
 * Not a full ZIP library: sufficient for SIGILLARIUM bundles.
 */
type Entry = {
    path: string;
    data: Uint8Array;
    mode?: number;
    method?: 0 | 8;
};
export declare function zipDeterministic(entries: Entry[]): Uint8Array;
export {};
