import util from "node:util";
import { execFile as rawExecFile } from "node:child_process";
import path from "path";
import { type IconSetGitSource } from "./_types";
import { icons } from "../src/icons";
const execFile = util.promisify(rawExecFile);

interface Context {
  distBaseDir: string;
  iconDir(name: string): string;
}

// Check icon packages version
async function main() {
  const distBaseDir = path.join(__dirname, "../icons");
  const ctx: Context = {
    distBaseDir,
    iconDir(name: string) {
      return path.join(distBaseDir, name);
    },
  };

  const diffs: { id: string; name: string; diffs: number; current: string }[] =
    [];
  for (const icon of icons) {
    if (!icon.source) {
      continue;
    }
    console.log(`checking ${icon.name}...`);
    const diff = await gitDiffCount(icon.source, ctx);
    console.log("diff ", icon.name, diff.diffs, diff.current);
    diffs.push({
      id: icon.id,
      name: icon.name,
      diffs: diff.diffs,
      current: diff.current,
    });
  }
  console.table(diffs);
}

async function gitDiffCount(
  source: IconSetGitSource,
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

  const count = await execFile(
    "git",
    ["rev-list", "--count", `${source.hash}..${currentHash}`],
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
