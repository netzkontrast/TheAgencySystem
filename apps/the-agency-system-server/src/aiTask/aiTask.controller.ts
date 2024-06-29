import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiTaskService } from "./aiTask.service";
import { AiTaskControllerBase } from "./base/aiTask.controller.base";

@swagger.ApiTags("aiTasks")
@common.Controller("aiTasks")
export class AiTaskController extends AiTaskControllerBase {
  constructor(protected readonly service: AiTaskService) {
    super(service);
  }
}
