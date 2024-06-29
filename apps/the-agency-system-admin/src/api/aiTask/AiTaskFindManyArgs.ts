import { AiTaskWhereInput } from "./AiTaskWhereInput";
import { AiTaskOrderByInput } from "./AiTaskOrderByInput";

export type AiTaskFindManyArgs = {
  where?: AiTaskWhereInput;
  orderBy?: Array<AiTaskOrderByInput>;
  skip?: number;
  take?: number;
};
