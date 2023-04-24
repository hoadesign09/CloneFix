import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import UserDetail from './UserDetail';

const UserPage = ({ userID }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const docRef = doc(collection(db, 'users'), userID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error('User not found');
        }
      } catch (error) {
        console.error('Error getting user:', error);
      }
    };
    fetchUser();
  }, [userID]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>User Page</h1>
      <UserDetail user={user} />
    </>
  );
};

export default UserPage;
