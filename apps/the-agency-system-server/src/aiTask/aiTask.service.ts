import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiTaskServiceBase } from "./base/aiTask.service.base";

@Injectable()
export class AiTaskService extends AiTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
