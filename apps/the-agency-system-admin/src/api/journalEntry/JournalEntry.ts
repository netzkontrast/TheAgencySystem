import { AiTask } from "../aiTask/AiTask";
import { User } from "../user/User";

export type JournalEntry = {
  aiTasks?: Array<AiTask>;
  content: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
