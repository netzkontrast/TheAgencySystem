import { JournalEntryCreateNestedManyWithoutUsersInput } from "./JournalEntryCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  journalEntries?: JournalEntryCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
};
