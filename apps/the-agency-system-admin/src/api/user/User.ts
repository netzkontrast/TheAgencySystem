import { JournalEntry } from "../journalEntry/JournalEntry";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  journalEntries?: Array<JournalEntry>;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
