import { Pool } from "pg";
import "reflect-metadata";
import { Service, Container } from "typedi";
import * as config from 'config';

@Service()
export class EmployeeService {
  private databaseConnection: Pool;
  constructor() {
    this.databaseConnection = new Pool(config.get('application.database'));
    this.databaseConnection
      .on("error", (err, client) => {
        console.error("idle client error", err.message, err.stack);
      })
      .connect(() => {
        console.log("Database connected.");
      });
  }

  async getEmployee() {
    return await this.databaseConnection.query("select * from get_employees()");
  }
}
