import util from "node:util";
import { execFile as rawExecFile } from "node:child_process";
import path from "path";
import { type IconSetGitSource } from "./_types";
import { icons } from "../src/icons";
import { getIconLockHash, readIconLock, writeIconLock } from "./icon-lock";
const execFile = util.promisify(rawExecFile);

interface Context {
  distBaseDir: string;
  iconDir(name: string): string;
}

// Check icon packages version
async function main() {
  const update = process.argv.slice(2).includes("--update");
  const distBaseDir = path.join(__dirname, "../icons");
  const ctx: Context = {
    distBaseDir,
    iconDir(name: string) {
      return path.join(distBaseDir, name);
    },
  };

  const diffs: { id: string; name: string; diffs: number; current: string }[] =
    [];
  const lock = readIconLock();
  const updatedLock = new Map<string, string>();
  for (const icon of icons) {
    if (!icon.source) {
      continue;
    }
    console.log(`checking ${icon.name}...`);
    const hash = update ? lock.get(icon.id) : getIconLockHash(lock, icon.id);
    const diff = await gitDiffCount(icon.source, hash, ctx);
    console.log("diff ", icon.name, diff.diffs, diff.current);
    diffs.push({
      id: icon.id,
      name: icon.name,
      diffs: diff.diffs,
      current: diff.current,
    });
    updatedLock.set(icon.id, diff.current);
  }
  console.table(diffs);
  if (update) {
    writeIconLock(updatedLock);
  }
}

async function gitDiffCount(
  source: IconSetGitSource,
  hash: string | undefined,
  ctx: Context,
): Promise<{ current: string; diffs: number }> {
  const hashRes = await execFile(
    "git",
    ["rev-parse", `origin/${source.branch}`],
    {
      cwd: ctx.iconDir(source.localName),
    },
  );
  const currentHash = hashRes.stdout.trim();

  if (!hash) {
    return { current: currentHash, diffs: 0 };
  }

  const count = await execFile(
    "git",
    ["rev-list", "--count", `${hash}..${currentHash}`],
    {
      cwd: ctx.iconDir(source.localName),
    },
  );

  return {
    current: currentHash,
    diffs: +count.stdout.trim(),
  };
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
