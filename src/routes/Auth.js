import React from "react";
import styled from "styled-components";
import AuthForm from "../components/AuthForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const Auth = () => {
  // google 계정으로 로그인하기
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    }
    const data = await signInWithPopup(auth, provider);
    console.log(data);
  };

  return (
    <AuthContainer>
      <img src="./My project.png" width="150px" />
      <AuthForm />
      <AuthGoogleForm>
        <button name="google" onClick={onSocialClick}>
          Google 계정으로 로그인하기 <FontAwesomeIcon icon={faGoogle} />
        </button>
      </AuthGoogleForm>
    </AuthContainer>
  );
};

const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthGoogleForm = styled.div`
  button {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #eee;
    background-color: #c45964;
    color: #fff;
  }
`;
export default Auth;
