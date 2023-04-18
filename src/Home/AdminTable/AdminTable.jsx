import React from 'react';
import "./AdminTable.css";

const AdminTable = ({ data, onDelete }) => {
    return (
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
                {data.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.position}</td>
                        <td>
                            <button onClick={() => onDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AdminTable;