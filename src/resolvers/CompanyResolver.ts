import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { projects, TaskData, tasks, EmployeeData, employees, CompanyData, companies } from '../data';
import Task from "../schemas/Task";
import Employee from '../schemas/Employee';
import Company from "../schemas/Company";

@Resolver(of => Company)
export default class {



}
