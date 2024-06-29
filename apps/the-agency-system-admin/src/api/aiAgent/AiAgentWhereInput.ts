import { AiTaskListRelationFilter } from "../aiTask/AiTaskListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AiAgentWhereInput = {
  aiTasks?: AiTaskListRelationFilter;
  configField?: JsonFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
