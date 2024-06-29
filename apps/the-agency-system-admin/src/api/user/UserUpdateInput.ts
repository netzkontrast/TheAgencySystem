import { JournalEntryUpdateManyWithoutUsersInput } from "./JournalEntryUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  journalEntries?: JournalEntryUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
};
