import fs from "fs";
import path from "path";

const lockFile = path.resolve(__dirname, "../src/icons/icons.lock");

export function readIconLock(): Map<string, string> {
  const lock = new Map<string, string>();

  for (const line of fs.readFileSync(lockFile, "utf8").trim().split("\n")) {
    const [id, hash, ...rest] = line.split("\t");
    if (!id || !hash || rest.length > 0) {
      throw new Error(`Invalid icon lock entry: ${line}`);
    }
    if (lock.has(id)) {
      throw new Error(`Duplicate icon lock entry: ${id}`);
    }
    lock.set(id, hash);
  }

  return lock;
}

export function getIconLockHash(lock: Map<string, string>, id: string): string {
  const hash = lock.get(id);
  if (!hash) {
    throw new Error(`Missing icon lock entry: ${id}`);
  }
  return hash;
}

export function writeIconLock(lock: Map<string, string>): void {
  const contents = [...lock]
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([id, hash]) => `${id}\t${hash}`)
    .join("\n");
  fs.writeFileSync(lockFile, `${contents}\n`);
}
