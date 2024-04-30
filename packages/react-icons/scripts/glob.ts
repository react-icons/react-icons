import { glob as rawGlob } from "glob-promise";
export function glob(pattern: string): Promise<string[]> {
  return rawGlob.glob(pattern.replace(/\\/g, "/")); // convert windows path
}
