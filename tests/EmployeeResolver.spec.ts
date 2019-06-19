import { expect } from "chai";
import "mocha";
import proxyquire from "proxyquire";
import EmployeeResolver from "../src/resolvers/EmployeeResolver";
import "reflect-metadata";
import { EmployeeService } from "../src/services/EmployeeService";
import { Container } from "typedi";

describe("EmployeeResolver tests", () => {
  it("employees()", async () => {
    const employeeResolverMock = proxyquire(
      "../src/resolvers/EmployeeResolver",
      {}
    ).default;
    Container.set(EmployeeService, {
      getEmployee: (input: any) => {
        return {"rows":[{"id":1,"name":"Sam","company_id":1,"designation_id":1,"created":"2019-06-14T08:51:37.891Z","enable":true},{"id":2,"name":"John","company_id":2,"designation_id":2,"created":"2019-06-14T08:51:59.517Z","enable":true}]}
      }
    });

    const resolver = new employeeResolverMock(
    ) as EmployeeResolver;
    const result = await resolver.employees();
    // expect(result).to.be.length(2);
    expect(result[0]).to.have.property('id', 1);
  });
});
