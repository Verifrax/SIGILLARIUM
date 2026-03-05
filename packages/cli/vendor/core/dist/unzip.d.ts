export type ZipEntry = {
    path: string;
    method: number;
    compSize: number;
    size: number;
    crc32: number;
    offset: number;
};
export declare function listZipEntries(zip: Uint8Array): ZipEntry[];
export declare function extractZipEntry(zip: Uint8Array, entry: ZipEntry): Uint8Array;
