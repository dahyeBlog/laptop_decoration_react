import React from "react";
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
    if(name === 'google') {
      provider = new GoogleAuthProvider
    }
    const data = await signInWithPopup(auth, provider)
    console.log(data);
  };

  return (
    <div>
      <AuthForm />
      <div>
        <button name="google" onClick={onSocialClick}>
         Google 계정으로 로그인하기 <FontAwesomeIcon icon={faGoogle} />
        </button>
      </div>
    </div>
  );
};

export default Auth;
