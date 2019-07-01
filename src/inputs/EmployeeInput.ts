import { Field, Int, ObjectType, InputType } from "type-graphql";

@InputType()
export default class EmployeeInput {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  company_id: number;

  @Field()
  designation_id: number;

  @Field()
  enable : boolean
}
