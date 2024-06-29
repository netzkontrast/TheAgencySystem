import { AiAgentWhereUniqueInput } from "../aiAgent/AiAgentWhereUniqueInput";
import { JournalEntryWhereUniqueInput } from "../journalEntry/JournalEntryWhereUniqueInput";

export type AiTaskCreateInput = {
  aiAgent?: AiAgentWhereUniqueInput | null;
  description?: string | null;
  journalEntry?: JournalEntryWhereUniqueInput | null;
  status?: "Option1" | null;
};
