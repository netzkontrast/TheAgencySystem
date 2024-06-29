import { AiTaskUpdateManyWithoutJournalEntriesInput } from "./AiTaskUpdateManyWithoutJournalEntriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JournalEntryUpdateInput = {
  aiTasks?: AiTaskUpdateManyWithoutJournalEntriesInput;
  content?: string | null;
  date?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
