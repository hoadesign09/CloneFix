import React from "react";
import axios from "axios";

function getUserData(_id, setUserData) {
  axios.get(`http://localhost:3132/users/${_id}`)
    .then((response) => {
      setUserData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
export default getUserData