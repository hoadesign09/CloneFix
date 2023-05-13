import React, { useState } from 'react';
import './UserList.css';
const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'binh', email: 'cc' },
    { id: 2, name: 'kiet', email: 'cl' },
    { id: 3, name: 'hoa', email: 'clq' },
  ]);

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="list-container">
      <table className="list-body">
        <div className="list-form-container">
            <div className="list-form-header">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
        </div>
        <tbody>
            <div className="list-form-item">
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                        <button className="btn-delete" onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                    ))}
            </div>
        </tbody>
        </div>
      </table>
    </div>
  );
};

export default UserList;