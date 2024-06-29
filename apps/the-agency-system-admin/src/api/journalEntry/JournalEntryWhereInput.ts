import { AiTaskListRelationFilter } from "../aiTask/AiTaskListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JournalEntryWhereInput = {
  aiTasks?: AiTaskListRelationFilter;
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
