import React from 'react';
import "./UserTable.css";

const UserTable = ({ data }) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;