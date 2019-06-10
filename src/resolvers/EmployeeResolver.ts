import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { projects, TaskData, tasks, EmployeeData, employees, companies } from "../data";
import Task from "../schemas/Task";
import Employee from '../schemas/Employee';
import Company from "../schemas/Company";

@Resolver(of => Employee)
export default class {
  @Query(returns => [Employee])
  employees(): EmployeeData[] {
    return employees;
  }

  @Query(returns => Employee, { nullable: true })
  getEmployeeById(@Arg("id") id: number): EmployeeData | undefined {
    return employees.find(emp => emp.id === id);
  }
  
  @FieldResolver(returns => Company, { nullable: true })
  company(@Root() employeeData: EmployeeData) {
    return companies.find(cmd => {
      return cmd.id === employeeData.company_id;
    });
  }

  @FieldResolver(returns => [Task], {nullable : true})
  tasks(@Root() employeeData: EmployeeData) {
    return tasks.filter(task => {
      return task.employee_id === employeeData.id;
    });
  }

}
