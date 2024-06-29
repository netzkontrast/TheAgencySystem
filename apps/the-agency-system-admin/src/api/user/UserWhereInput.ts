import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JournalEntryListRelationFilter } from "../journalEntry/JournalEntryListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  journalEntries?: JournalEntryListRelationFilter;
  lastName?: StringNullableFilter;
  role?: "Option1";
  username?: StringFilter;
};
