import React from "react";
import { Formik, Field } from "formik";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ADD_EMPLOYESS = gql`
  mutation AddEmployee($input: EmployeeInput!) {
    addEmployee(input: $input)
  }
`;

const AddEmployee = props => {
  return (
    <div>
      <Mutation mutation={ADD_EMPLOYESS}>
        {(addEmployee, { data }) => (
          <Formik
            initialValues={{
              id: "",
              name: "",
              company_id: "",
              designation_id: "",
              enable: true
            }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                addEmployee({
                  variables: {
                    input: {
                      id: values.id,
                      name: values.name,
                      company_id: values.company_id,
                      designation_id: values.designation_id,
                      enable: true
                    }
                  }
                }).then(() => {
                  //props.getEmp();
                });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
            render={formikProps => (
              <form onSubmit={formikProps.handleSubmit}>
                <div className="form-group">
                  <Field
                    type="number"
                    className="form-control col-sm-4"
                    name="id"
                    placeholder="id"
                    defaultValue={formikProps.initialValues.id}
                  />
                  <Field
                    type="text"
                    className="form-control col-sm-4"
                    name="name"
                    placeholder="name"
                    defaultValue={formikProps.initialValues.name}
                  />
                  <Field
                    type="number"
                    className="form-control col-sm-4"
                    name="company_id"
                    placeholder="company_id"
                    defaultValue={formikProps.initialValues.company_id}
                  />
                  <Field
                    type="number"
                    className="form-control col-sm-4"
                    name="designation_id"
                    placeholder="designation_id"
                    defaultValue={formikProps.initialValues.designation_id}
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            )}
          />
        )}
      </Mutation>
    </div>
  );
};

export default AddEmployee;
