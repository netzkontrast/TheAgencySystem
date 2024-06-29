import { AiTaskUpdateManyWithoutAiAgentsInput } from "./AiTaskUpdateManyWithoutAiAgentsInput";
import { InputJsonValue } from "../../types";

export type AiAgentUpdateInput = {
  aiTasks?: AiTaskUpdateManyWithoutAiAgentsInput;
  configField?: InputJsonValue;
  description?: string | null;
  name?: string | null;
};
