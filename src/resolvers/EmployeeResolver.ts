import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { projects, TaskData, tasks, EmployeeData, employees } from "../data";
import Task from "../schemas/Task";
import Employee from '../schemas/Employee';

@Resolver(of => Task)
export default class {
  @Query(returns => [Employee])
  employees(): EmployeeData[] {
    return employees;
  }

  @Query(returns => Employee, { nullable: true })
  getEmployeeById(@Arg("id") id: number): EmployeeData | undefined {
    return employees.find(emp => emp.id === id);
  }

  @FieldResolver()
  employee(@Root() taskData: TaskData) {
    return employees.find(emp => {
      return emp.id === taskData.employee_id;
    });
  }
  
}
