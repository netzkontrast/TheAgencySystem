import { AiAgent } from "../aiAgent/AiAgent";
import { JournalEntry } from "../journalEntry/JournalEntry";

export type AiTask = {
  aiAgent?: AiAgent | null;
  createdAt: Date;
  description: string | null;
  id: string;
  journalEntry?: JournalEntry | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
