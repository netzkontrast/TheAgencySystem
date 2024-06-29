/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AiTaskWhereUniqueInput } from "../../aiTask/base/AiTaskWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AiTaskUpdateManyWithoutAiAgentsInput {
  @Field(() => [AiTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AiTaskWhereUniqueInput],
  })
  connect?: Array<AiTaskWhereUniqueInput>;

  @Field(() => [AiTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AiTaskWhereUniqueInput],
  })
  disconnect?: Array<AiTaskWhereUniqueInput>;

  @Field(() => [AiTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AiTaskWhereUniqueInput],
  })
  set?: Array<AiTaskWhereUniqueInput>;
}

export { AiTaskUpdateManyWithoutAiAgentsInput as AiTaskUpdateManyWithoutAiAgentsInput };
