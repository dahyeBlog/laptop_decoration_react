import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyProfile = () => {
  const navigate = useNavigate()

  const onLogOutClick = () => {
    auth.signOut()
    navigate('/')  
  }

  return (
    <LogOutContainer>
      <span onClick={onLogOutClick}>Log Out</span>
    </LogOutContainer>
  );
};

const LogOutContainer = styled.div`
  padding: 20px;
  background-color: antiquewhite;
  width: 100px;
  text-align: center;
  cursor: pointer;
  background-color: #C45964;
  color:#fff;
  margin: 30px auto;
  border-radius: 20px;
`

export default MyProfile;
