import * as graphql from "@nestjs/graphql";
import { AiTaskResolverBase } from "./base/aiTask.resolver.base";
import { AiTask } from "./base/AiTask";
import { AiTaskService } from "./aiTask.service";

@graphql.Resolver(() => AiTask)
export class AiTaskResolver extends AiTaskResolverBase {
  constructor(protected readonly service: AiTaskService) {
    super(service);
  }
}
