import { AiTask as TAiTask } from "../api/aiTask/AiTask";

export const AITASK_TITLE_FIELD = "id";

export const AiTaskTitle = (record: TAiTask): string => {
  return record.id?.toString() || String(record.id);
};
