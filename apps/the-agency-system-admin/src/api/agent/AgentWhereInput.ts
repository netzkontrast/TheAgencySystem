import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AgentWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  role?: StringFilter;
  systemprompt?: StringFilter;
};
