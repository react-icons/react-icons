import util from "node:util";
import { execFile as rawExecFile } from "node:child_process";
import fs from "fs";
import path from "path";
import { type IconSetGitSource } from "./_types";
import { icons } from "../src/icons";
import {
  getIconLockHash,
  readIconLock,
  validateIconLock,
  writeIconLock,
} from "./icon-lock";
import PQueue from "p-queue";
const execFile = util.promisify(rawExecFile);

interface Context {
  distBaseDir: string;
  iconDir(name: string): string;
}

async function main() {
  const update = process.argv.slice(2).includes("--update");
  const distBaseDir = path.join(__dirname, "../icons");
  const ctx: Context = {
    distBaseDir,
    iconDir(name: string) {
      return path.join(distBaseDir, name);
    },
  };
  const lock = readIconLock();
  const sourceIds = icons.filter((icon) => icon.source).map((icon) => icon.id);
  if (!update) {
    validateIconLock(lock, sourceIds);
  }
  const sources: {
    id: string;
    source: IconSetGitSource;
    hash: string | undefined;
  }[] = [];
  for (const icon of icons) {
    if (icon.source) {
      sources.push({
        id: icon.id,
        source: icon.source,
        hash: update ? undefined : getIconLockHash(lock, icon.id),
      });
    }
  }

  // rm all icons and mkdir dist
  await fs.promises.rm(distBaseDir, {
    recursive: true,
    force: true,
  });
  await fs.promises.mkdir(distBaseDir, {
    recursive: true,
  });

  const queue = new PQueue({ concurrency: 10 });
  const fetchedLock = new Map<string, string>();
  const tasks = sources.map(({ id, source, hash }) =>
    queue.add(async () => {
      const fetchedHash = await gitCloneIcon(source, hash, ctx);
      fetchedLock.set(id, fetchedHash);
    }),
  );
  await Promise.all(tasks);

  if (update) {
    writeIconLock(fetchedLock);
  }
}

async function gitCloneIcon(
  source: IconSetGitSource,
  hash: string | undefined,
  ctx: Context,
): Promise<string> {
  console.log(
    `start clone icon: ${source.url}/${source.remoteDir}@${source.branch}`,
  );
  await execFile(
    "git",
    ["clone", "--filter=tree:0", "--no-checkout", source.url, source.localName],
    {
      cwd: ctx.distBaseDir,
    },
  );

  await execFile(
    "git",
    ["sparse-checkout", "set", "--cone", "--skip-checks", source.remoteDir],
    {
      cwd: ctx.iconDir(source.localName),
    },
  );

  await execFile("git", ["checkout", hash ?? `origin/${source.branch}`], {
    cwd: ctx.iconDir(source.localName),
  });

  const hashRes = await execFile("git", ["rev-parse", "HEAD"], {
    cwd: ctx.iconDir(source.localName),
  });
  return hashRes.stdout.trim();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
