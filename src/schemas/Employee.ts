import { Field, Int, ObjectType } from "type-graphql";
import Project from "./Project";
import Task from "./Task";

@ObjectType()
export default class Employee {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;
}
