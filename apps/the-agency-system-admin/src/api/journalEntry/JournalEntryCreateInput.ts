import { AiTaskCreateNestedManyWithoutJournalEntriesInput } from "./AiTaskCreateNestedManyWithoutJournalEntriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JournalEntryCreateInput = {
  aiTasks?: AiTaskCreateNestedManyWithoutJournalEntriesInput;
  content?: string | null;
  date?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
