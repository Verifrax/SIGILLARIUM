declare module "./vendor/core/dist/index.js" {
  export function seal(inputPath: string, opts?: any): Promise<any> | any;
  export function verify(bundlePath: string, opts?: any): Promise<any> | any;
  export function inspect(bundlePath: string, opts?: any): Promise<any> | any;
  export function manifest(inputPath: string, opts?: any): Promise<any> | any;
}
