import React, { useState } from 'react';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase';

const UserForm = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(collection(db, 'users'), user.id), {
        firstName,
        lastName,
        email,
      });
      console.log('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Update user</button>
    </form>
  );
};

export default UserForm;