import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const child = spawn(require("electron"), ["electron"], {
  stdio: "inherit",
  env: { ...process.env, OPEN_DOT_DEV_URL: "http://localhost:3100" },
});
child.on("error", (error) => { console.error(error); process.exitCode = 1; });
child.on("exit", (code) => { process.exitCode = code ?? 1; });
