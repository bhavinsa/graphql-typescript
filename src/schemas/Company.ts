import { Field, Int, ObjectType } from "type-graphql";
import Project from "./Project";
import Task from "./Task";
import { companies } from '../data';

@ObjectType()
export default class Company {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  address: string
}
