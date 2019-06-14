import { Field, Int, ObjectType } from "type-graphql";
import Project from "./Project";
import Task from "./Task";
import Company from "./Company";
import { designation } from '../data';

@ObjectType()
export default class Employee {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  company_id: number;

  @Field()
  designation_id: number;

  @Field()
  created : Date

  @Field()
  enable : boolean
}
