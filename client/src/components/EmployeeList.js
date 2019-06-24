import React from "react";

export default function EmployeeList({ emp: { id, name } }) {
  return (
    <tr>
    <td>{id}</td>
    <td>{name}</td>
  </tr>
  );
}
