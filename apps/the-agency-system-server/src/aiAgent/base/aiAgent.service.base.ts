/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AiAgent as PrismaAiAgent,
  AiTask as PrismaAiTask,
} from "@prisma/client";

export class AiAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AiAgentCountArgs, "select">): Promise<number> {
    return this.prisma.aiAgent.count(args);
  }

  async aiAgents(args: Prisma.AiAgentFindManyArgs): Promise<PrismaAiAgent[]> {
    return this.prisma.aiAgent.findMany(args);
  }
  async aiAgent(
    args: Prisma.AiAgentFindUniqueArgs
  ): Promise<PrismaAiAgent | null> {
    return this.prisma.aiAgent.findUnique(args);
  }
  async createAiAgent(args: Prisma.AiAgentCreateArgs): Promise<PrismaAiAgent> {
    return this.prisma.aiAgent.create(args);
  }
  async updateAiAgent(args: Prisma.AiAgentUpdateArgs): Promise<PrismaAiAgent> {
    return this.prisma.aiAgent.update(args);
  }
  async deleteAiAgent(args: Prisma.AiAgentDeleteArgs): Promise<PrismaAiAgent> {
    return this.prisma.aiAgent.delete(args);
  }

  async findAiTasks(
    parentId: string,
    args: Prisma.AiTaskFindManyArgs
  ): Promise<PrismaAiTask[]> {
    return this.prisma.aiAgent
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .aiTasks(args);
  }
}
