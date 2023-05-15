import React, {useState, useEffect} from 'react';
import './Account.css';
import SavedShow from '../components/SavedShow'
import axios from 'axios';
import getUserData from './user/Index';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Account = (props) => {

  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   getUserData(props._id, setUserData);
  // }, [props._id]);

  const [user, setUser] = useState({});
  const [id, setID] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setID(user.uid);
      } else {
        setID(null);
        setUser({});
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        const result = await axios.get(`http://localhost:3132/users/${id}`); 
        setUser(result.data.user);
      }
    };
    fetchUser();
  }, [id]);

  console.log(user)

  return (
    <div>
          <div className='w-full text-white'>
            <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
              alt="/"
              className="hidden sm:block absolute w-full h-full object-cover"
                />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-full'>
            </div>
            <h1 className='absolute right-0 left-0 bottom-0 top-[15%] text-3xl md:text-5xl font-bold text-center'>My Account</h1>
            <div className='account-body'>
              <div className='form-account'>
                <input type='text' className='field-acc' value={user?.fullname} />
                <br/>
                <input type='text' className='field-acc' value={user?.email}/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Account