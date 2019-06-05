import { Field, Int, ObjectType } from "type-graphql";
import Project from "./Project";
import Employee from './Employee';


@ObjectType()
export default class Task {
  @Field(type => Int)
  id: number;

  @Field()
  title: string;

  @Field(type => Project)
  project: Project;

  @Field()
  completed: boolean;

  @Field(type => Employee)
  employee: Employee;
}
