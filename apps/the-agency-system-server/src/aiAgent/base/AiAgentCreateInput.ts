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
import { AiTaskCreateNestedManyWithoutAiAgentsInput } from "./AiTaskCreateNestedManyWithoutAiAgentsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class AiAgentCreateInput {
  @ApiProperty({
    required: false,
    type: () => AiTaskCreateNestedManyWithoutAiAgentsInput,
  })
  @ValidateNested()
  @Type(() => AiTaskCreateNestedManyWithoutAiAgentsInput)
  @IsOptional()
  @Field(() => AiTaskCreateNestedManyWithoutAiAgentsInput, {
    nullable: true,
  })
  aiTasks?: AiTaskCreateNestedManyWithoutAiAgentsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  configField?: InputJsonValue;

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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { AiAgentCreateInput as AiAgentCreateInput };
