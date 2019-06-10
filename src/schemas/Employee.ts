import { Field, Int, ObjectType } from "type-graphql";
import Project from "./Project";
import Task from "./Task";
import Company from "./Company";

@ObjectType()
export default class Employee {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  company_id: number;

  @Field(type => Company)
  company: Company

  @Field(type => Task)
  task: Task

}
