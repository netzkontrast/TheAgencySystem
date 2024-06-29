import { Module } from "@nestjs/common";
import { AiTaskModuleBase } from "./base/aiTask.module.base";
import { AiTaskService } from "./aiTask.service";
import { AiTaskController } from "./aiTask.controller";
import { AiTaskResolver } from "./aiTask.resolver";

@Module({
  imports: [AiTaskModuleBase],
  controllers: [AiTaskController],
  providers: [AiTaskService, AiTaskResolver],
  exports: [AiTaskService],
})
export class AiTaskModule {}
