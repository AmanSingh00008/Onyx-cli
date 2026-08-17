#!/usr/bin/env bun

import { Command } from "commander";
import { runwakeup } from "./tui/wakeup.ts";

const program = new Command();

program
  .name("Onyx-cli")
  .description(
    "A sleek CLI for rapid fullstack scaffolding and workflow automation.",
  )
  .version("1.0.0");

program
  .command("wakeup")
  .description("Wake up the Onyx CLI")
  .action(async () => {
    await runwakeup();
  });

await program.parseAsync(process.argv);
