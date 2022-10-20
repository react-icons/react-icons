import util from "node:util";
import { execFile as rawExecFile } from "node:child_process";
import fs from "fs";
import path from "path";
const execFile = util.promisify(rawExecFile);

async function main() {
  const iconsBaseDir = path.join(__dirname, "../icons");
  await fs.promises.mkdir(iconsBaseDir, {
    recursive: true,
  });

  const iconDir = path.join(iconsBaseDir, "weather");
  await fs.promises.rm(iconDir, {
    recursive: true,
    force: true,
  });

  const res = await execFile(
    "git",
    [
      "clone",
      "--filter=tree:0",
      "--no-checkout",
      "https://github.com/erikflowers/weather-icons.git",
      "weather",
    ],
    {
      cwd: iconsBaseDir,
    }
  );
  console.log(res);

  const res2 = await execFile(
    "git",
    ["sparse-checkout", "set", "--cone", "svg/"],
    {
      cwd: iconDir,
    }
  );
  console.log(res2);

  const res3 = await execFile("git", ["checkout", "master"], {
    cwd: iconDir,
  });
  console.log(res3);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
