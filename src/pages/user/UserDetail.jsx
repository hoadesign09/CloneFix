import React from 'react';
import UserForm from './UserForm';

const UserDetail = ({ user }) => {
  return (
    <>
      <h2>User Detail</h2>
      <UserForm user={user} />
    </>
  );
};

export default UserDetail;
