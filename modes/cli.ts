import chalk from "chalk";
import {select, isCancel} from '@clack/prompts';
import { runAgentMode } from "./agent/orchestrator.ts";
import { runAskMode } from "./ask/orchestrator.ts";
import { runPlanMode } from "./plan/orchestrator.ts";



export async function runcliMode(){
   while(true){
    const mode = await select({
        message: "Choose a mode",
        options: [
            { value: "agent", label: "agent Mode" },
            { value: "plan", label: "plan Mode" },
            { value: "ask", label: "ask Mode" },
            { value: "back", label: "back to main menu Mode" },
        ],
    });
    if(isCancel(mode) || mode === "back"){
        return;
    }
    if(mode === "agent"){
       await runAgentMode()
    }
    if(mode === "plan"){
       await runPlanMode()
    }
    if(mode === "ask"){
        await runAskMode()
    }
    if(mode !== "agent" && mode !== "plan" && mode !== "ask" && mode !== "back"){
        console.log("Invalid mode");
    }
   }
}