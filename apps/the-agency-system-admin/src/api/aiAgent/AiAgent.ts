import { AiTask } from "../aiTask/AiTask";
import { JsonValue } from "type-fest";

export type AiAgent = {
  aiTasks?: Array<AiTask>;
  configField: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
