/* eslint-disable @typescript-eslint/no-explicit-any */

declare module "find-package" {
  function findPackage(path: string, addpaths?: boolean): any;

  export default findPackage;
}
