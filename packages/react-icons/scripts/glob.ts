import rawGlob from "glob-promise";
export function glob(pattern: string): Promise<string[]> {
  return rawGlob(pattern.replace(/\\/g, "/")); // convert windows path
}
