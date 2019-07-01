import { Pool } from "pg";
import "reflect-metadata";
import { Service, Container } from "typedi";
import * as config from "config";
import { DbConnectionService } from "./DbConnectionService";
import EmployeeInput from "../inputs/EmployeeInput";
@Service()
export class EmployeeService {
  private databaseConnection: Pool;
  constructor(private dbConnectionService: DbConnectionService) {}

  async getEmployee() {
    this.databaseConnection = await this.dbConnectionService.getDbConnection();
    return await this.databaseConnection.query("select * from get_employees()");
  }
  
  async getEmployeeById(id: number) {
    this.databaseConnection = await this.dbConnectionService.getDbConnection();
    return await this.databaseConnection.query(`select * from employees where id = ${id}`);
  }

  async addEmployee(data: EmployeeInput) {
    this.databaseConnection = await this.dbConnectionService.getDbConnection();
    return await this.databaseConnection.query(`INSERT INTO employees (id, name, company_id, designation_id, enable) VALUES (${data.id}, '${data.name}', ${data.company_id},${
      data.designation_id
    }, ${data.enable})`);
  }
}
