import React, {useState, useEffect} from 'react';
import './Account.css';
import SavedShow from '../components/SavedShow'
import axios from 'axios';
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put('/api/user', user); // Thay đổi đường dẫn API tương ứng
      alert('Thông tin đã được cập nhật thành công!');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

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
                <form className='form-flex' onSubmit={handleSubmit}>
                  <div className='item-field'>
                    <div className='flex-row-form'>
                      <label for="email">Email:</label>
                      <input type="email" name="email" value={user.email} onChange={handleChange}/>
                    </div>
                    <div className='flex-row-form'>
                      <label for="password">Password:</label>
                      <input type="password" name="password" value={user.password} onChange={handleChange}/>
                    </div>
                  </div>
                  <div className='item-field'>
                    <div className='flex-row-form'>
                      <label for="fullname">Fullname:</label>
                      <input type="text" name="fullname" placeholder='please update your info...' value={user.fullname} onChange={handleChange}/>
                    </div>
                    <div className='flex-row-form'>
                      <label for="phone">Phone:</label>
                      <input type="phone" name="phone" placeholder='please update your info...' value={user.phone} onChange={handleChange}/>
                    </div>
                  </div>                  
                  <div className="btn">
                    <button className='btn-submit' type="submit">Cập nhật</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Account