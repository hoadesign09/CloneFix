import React, { useState } from 'react';
import './UserForm.css';
const UserForm = ({ addUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
      <div className="form-add-container">
        <div className="form-add-body">
          <div className="form-add-form-header">
              <h2>ADD USER</h2>
          </div>
          <div className="form-add-form">
          <form onSubmit={handleSubmit}>
            <label>
              Email:
                <input
                  type="text" placeholder="Enter a new email... "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
            </label>
            <label>
              Password:
                <input
                  type="password" placeholder="Enter a new password... "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
            </label>
            <button className="btn-adduser" type="submit">Add User</button>
          </form>
          </div>
        </div>
      </div>
  );
};

export default UserForm;