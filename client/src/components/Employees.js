import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import EmployeeList from "./EmployeeList";
const GET_EMPLOYESS = gql`
  query GetEmployess {
    employees {
      id
      name
    }
  }
`;
export class Employees extends Component {
  render() {
    return (
      <Fragment>
        <Query query={GET_EMPLOYESS}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading</h4>;
            if (error) console.log(error);
            if (data) {
              console.log(data);
              return (
                <Fragment>
                  <table
                    className="table table-striped table-bordered"
                    style={{ width: "25%" }}
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "1%" }} scope="col">
                          #Id
                        </th>
                        <th style={{ width: "10%" }} scope="col">
                          Name
                        </th>
                      </tr>

                      {data.employees.map(emp => (
                        <EmployeeList key={emp.id} emp={emp} />
                      ))}
                    </thead>
                  </table>
                </Fragment>
              );
            }
          }}
        </Query>
      </Fragment>
    );
  }
}
export default Employees;
