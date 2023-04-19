import React from 'react';
import "./AdminTable.css";

const AdminTable = ({ data, onDelete }) => (
    <table className="admin-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Position</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map(({ id, name, lastname, position }) => (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{lastname}</td>
                    <td>{position}</td>
                    <td>
                        <button onClick={() => onDelete(id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default AdminTable;