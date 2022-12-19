import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const MyLaptop = () => {
  const navigate = useNavigate()

  const onLogOutClick = () => {
    auth.signOut()
    navigate('/')  
  }

  return (
    <div>
      <span onClick={onLogOutClick}>Log Out</span>
    </div>
  );
};

export default MyLaptop;
