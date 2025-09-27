import { glob as rawGlob } from "glob";
export function glob(pattern: string): Promise<string[]> {
  return rawGlob(pattern.replace(/\\/g, "/")); // convert windows path
}
