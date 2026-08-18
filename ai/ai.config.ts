import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { type ModelId } from "@ai-sdk/openrouter";

export function getAgentModel(){

const provider = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
    
});

const modelId = process.env.OPENROUTER_DEFAULT_MODEL;
  return provider(modelId as ModelId<"openrouter">);
}