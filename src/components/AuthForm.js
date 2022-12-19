import React, { useState } from "react";
// import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // 회원가입 및 로그인
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  return (
    <AuthForm>
      <form className="authForm" onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email을 입력하세요."
          required
          maxLength={20}
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password를 입력하세요."
          required
          maxLength={20}
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
      </form>

      <span onClick={toggleAccount}>
        {newAccount ? "로그인하기" : "회원가입하러가기"}
      </span>
    </AuthForm>
  );
};

export default AuthForm;
