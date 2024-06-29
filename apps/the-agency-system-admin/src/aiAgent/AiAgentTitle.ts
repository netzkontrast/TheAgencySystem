import { AiAgent as TAiAgent } from "../api/aiAgent/AiAgent";

export const AIAGENT_TITLE_FIELD = "name";

export const AiAgentTitle = (record: TAiAgent): string => {
  return record.name?.toString() || String(record.id);
};
