import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { projects, TaskData, tasks, EmployeeData, employees, companies, DesignationData, designation } from '../data';
import Task from "../schemas/Task";
import Employee from '../schemas/Employee';
import Company from "../schemas/Company";
import Designation from "../schemas/Designation";

@Resolver(of => Employee)
export default class {
  @Query(returns => [Employee])
  employees(): EmployeeData[] {
    return employees;
  }

  @Query(returns => Employee, { nullable: true })
  public async getEmployeeById(@Arg("id") id: number): Promise<EmployeeData | undefined> {
    return employees.find(emp => emp.id === id);
  }
  
  @FieldResolver(returns => Company, { nullable: true })
  public async company(@Root() employeeData: EmployeeData) {
    return companies.find(cmd => {
      return cmd.id === employeeData.company_id;
    });
  }

  @FieldResolver(returns => [Task], {nullable : true})
  public async tasks(@Root() employeeData: EmployeeData) {
    return tasks.filter(task => {
      return task.employee_id === employeeData.id;
    });
  }

  @FieldResolver(returns => Designation)
  public async designation(@Root() employeeData: EmployeeData) {
    return designation.find(data => {
      return data.id === employeeData.designation_id;
    });
  }

  @FieldResolver(returns => String)
  public async status() {
    return "ACTIVE";
  }

}
