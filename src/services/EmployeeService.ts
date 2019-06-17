import { Pool } from "pg";
import "reflect-metadata";
import { Service, Container } from "typedi";
import * as config from 'config';
import { DbConnectionService } from "./DbConnectionService";
@Service()
export class EmployeeService {
  private databaseConnection: Pool;
  constructor(private dbConnectionService: DbConnectionService) {
    
  }

  async getEmployee() {
    this.databaseConnection = await this.dbConnectionService.getDbConnection();
    return await this.databaseConnection.query("select * from get_employees()");
  }
}
