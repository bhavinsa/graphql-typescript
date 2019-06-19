import { Pool } from "pg";
import "reflect-metadata";
import { Service, Container } from "typedi";
// import * as config from "config";
import config = require("config");
@Service()
export class DbConnectionService {
  private databaseConnection: Pool;
  constructor() {}

  async getDbConnection() {
    if (!this.databaseConnection) {
      this.databaseConnection = new Pool(config.get("application.database"));
      this.databaseConnection
        .on("error", (err, client) => {
          console.error("idle client error", err.message, err.stack);
        })
        .connect(() => {
          console.log("Database connected.");
        });
    }
    return this.databaseConnection;
  }
}
