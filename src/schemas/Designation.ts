import { Field, Int, ObjectType } from "type-graphql";


@ObjectType()
export default class Designation {
  @Field(type => Int, {nullable: true})
  id: number;

  @Field({nullable: true})
  name: string;
}
