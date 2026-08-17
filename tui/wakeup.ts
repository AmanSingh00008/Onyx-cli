import { isCancel, select } from "@clack/prompts";

function printBannerWithShadow() {
  const banner = [
    "  ____             _            ",
    " / __ \\___  ____ _(_)___  ____ _",
    "/ / / / _ \\/ __ `/ / __ \\/ __ `/",
    "/ /_/ /  __/ /_/ / / / / / /_/ / ",
    "\\____/\\___\\/,__ /_/_/ /_/\\__, /  ",
    "           /____/         /____/   ",
  ].join("\n");

  const shadow = banner
    .split("\n")
    .map((line) => " ".repeat(2) + line)
    .join("\n");
  console.log(banner);
  console.log("\x1b[90m" + shadow + "\x1b[0m");
}

export async function runwakeup(): Promise<void> {
  printBannerWithShadow();

  const mode = await select({
    message: "Choose a mode",
    options: [
      { value: "cli", label: "CLI" },
      { value: "telegram", label: "Telegram" },
    ],
  });

  if (isCancel(mode)) {
    process.exit(0);
  }

  if (mode === "cli") {
    console.log("CLI mode selected");
  } else if (mode === "telegram") {
    console.log("Telegram mode selected");
  }
}
