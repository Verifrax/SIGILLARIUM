declare module "@sigillarium/core" {
  export const seal: (...args: any[]) => any;
  export const verify: (...args: any[]) => any;
  export const inspect: (...args: any[]) => any;
  export const manifest: (...args: any[]) => any;
}
