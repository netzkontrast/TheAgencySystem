import { AiTaskCreateNestedManyWithoutAiAgentsInput } from "./AiTaskCreateNestedManyWithoutAiAgentsInput";
import { InputJsonValue } from "../../types";

export type AiAgentCreateInput = {
  aiTasks?: AiTaskCreateNestedManyWithoutAiAgentsInput;
  configField?: InputJsonValue;
  description?: string | null;
  name?: string | null;
};
