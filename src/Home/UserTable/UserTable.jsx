import React from 'react';
import "./UserTable.css";

const UserTable = ({ data }) => (
  <table className="user-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Position</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ id, name, lastname, position }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{lastname}</td>
          <td>{position}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;