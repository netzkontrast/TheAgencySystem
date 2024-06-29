import { AiAgentWhereUniqueInput } from "../aiAgent/AiAgentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JournalEntryWhereUniqueInput } from "../journalEntry/JournalEntryWhereUniqueInput";

export type AiTaskWhereInput = {
  aiAgent?: AiAgentWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  journalEntry?: JournalEntryWhereUniqueInput;
  status?: "Option1";
};
