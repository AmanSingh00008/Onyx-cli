import chalk from "chalk";
import {select, isCancel} from '@clack/prompts';



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
        console.log("agent mode selected");
    }
    if(mode === "plan"){
        console.log("plan mode selected");
    }
    if(mode === "ask"){
        console.log("ask mode selected");
    }
    if(mode !== "agent" && mode !== "plan" && mode !== "ask" && mode !== "back"){
        console.log("Invalid mode");
    }
   }
}