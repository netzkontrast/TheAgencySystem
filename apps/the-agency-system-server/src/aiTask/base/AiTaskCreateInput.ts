/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiAgentWhereUniqueInput } from "../../aiAgent/base/AiAgentWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { JournalEntryWhereUniqueInput } from "../../journalEntry/base/JournalEntryWhereUniqueInput";
import { EnumAiTaskStatus } from "./EnumAiTaskStatus";

@InputType()
class AiTaskCreateInput {
  @ApiProperty({
    required: false,
    type: () => AiAgentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AiAgentWhereUniqueInput)
  @IsOptional()
  @Field(() => AiAgentWhereUniqueInput, {
    nullable: true,
  })
  aiAgent?: AiAgentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => JournalEntryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JournalEntryWhereUniqueInput)
  @IsOptional()
  @Field(() => JournalEntryWhereUniqueInput, {
    nullable: true,
  })
  journalEntry?: JournalEntryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumAiTaskStatus,
  })
  @IsEnum(EnumAiTaskStatus)
  @IsOptional()
  @Field(() => EnumAiTaskStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { AiTaskCreateInput as AiTaskCreateInput };