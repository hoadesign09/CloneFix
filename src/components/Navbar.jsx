import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex item-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-cyan-600 text-4xl font-bold cursor-pointer">
          CLONEFIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/Account">
            <button className="text-[#FFFDE3] pr-4">Account</button>
          </Link>
          <Link to='/Services'>
            <button className="text-[#FFFDE3] pr-4">Services</button>
          </Link>
          <button
            onClick={handleLogOut}
            className="text-[#FFFDE3] px-6 py-2 rounded cursor-pointer bg-cyan-600 "
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signIn">
            <button className="text-[#FFFDE3] pr-4">Sign In</button>
          </Link>
          <Link to="/signUp">
            <button className="text-[#FFFDE3] px-6 py-2 rounded cursor-pointer bg-cyan-600 ">
              Sign Up
            </button>
          </Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;
