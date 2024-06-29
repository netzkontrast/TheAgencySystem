import { SortOrder } from "../../util/SortOrder";

export type AiTaskOrderByInput = {
  aiAgentId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  journalEntryId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
