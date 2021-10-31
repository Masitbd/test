import React from "react";
import { Table } from "react-bootstrap";

const Examination = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center", color: "RED", margin: "10px" }}>
        Examination information
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dansk-1</td>
            <td>2200dkk</td>
            <td>22 nov 2021</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dansk-2</td>
            <td>2000dkk</td>
            <td>12 nov 2021</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dansk-3</td>
            <td>100dkk</td>
            <td>29 nov 2021</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Examination;
