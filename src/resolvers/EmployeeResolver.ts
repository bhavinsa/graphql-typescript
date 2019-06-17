import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root
} from "type-graphql";
import {
  projects,
  TaskData,
  tasks,
  EmployeeData,
  employees,
  companies,
  DesignationData,
  designation
} from "../data";
import Task from "../schemas/Task";
import Employee from "../schemas/Employee";
import Company from "../schemas/Company";
import Designation from "../schemas/Designation";
import { EmployeeService } from "../services/EmployeeService";
import Container, { Inject } from "typedi";

@Resolver(of => Employee)
export default class {
  @Inject(type => EmployeeService)
  private EmployeeServiceFiled?: EmployeeService;

  private get employeeService() {
    if (!this.EmployeeServiceFiled) {
      this.EmployeeServiceFiled = Container.get(EmployeeService);
    }
    return this.EmployeeServiceFiled;
  }

  @Query(returns => [Employee])
  public async employees(): Promise<EmployeeData[]> {
    return await this.employeeService.getEmployee().then(data => {
      return data.rows;
    }).catch((error => {
      console.log(JSON.stringify(error));
      return [];
    }));
  }
  
  @Query(returns => Employee, { nullable: true })
  public async getEmployeeById(
    @Arg("id") id: number
  ): Promise<EmployeeData | undefined> {
    return employees.find(emp => emp.id === id);
  }

  @FieldResolver(returns => Company, { nullable: true })
  public async company(@Root() employeeData: EmployeeData) {
    return companies.find(cmd => {
      return cmd.id === employeeData.company_id;
    });
  }

  @FieldResolver(returns => [Task], { nullable: true })
  public async tasks(@Root() employeeData: EmployeeData) {
    return tasks.filter(task => {
      return task.employee_id === employeeData.id;
    });
  }

  @FieldResolver(returns => Designation)
  public async designation(@Root() employeeData: EmployeeData) {
    return designation.find(data => {
      return data.id === employeeData.designation_id ? true : false;
    });
  }

  @FieldResolver(returns => String)
  public async status() {
    return "ACTIVE";
  }
}