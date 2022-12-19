import React, { useState } from "react";
import styled from "styled-components";
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
    <FormContainer>
      <form onSubmit={onSubmit}>
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
        <FormInput type="submit" value={newAccount ? "회원가입" : "로그인"} />
      </form>

      <FormSignToggle onClick={toggleAccount}>
        {newAccount ? "로그인하기" : "회원가입하러가기"}
      </FormSignToggle>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 350px;
  height: 180px;
  margin: 0 auto;
  margin-top: 10px;
  form {
    input {
      width: 100%;
      border: 1px solid #eee;
      box-sizing: border-box;
      padding: 0.5rem;
      margin-bottom: 5px;
    }
  }
`;

const FormInput = styled.input`
  border-radius: 3px;
  cursor: pointer;
  background-color: #c45964;
  color: #fff;
  &:hover {
    background-color: #ea939b;
    color: #fff;
  }
`;

const FormSignToggle = styled.span`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export default AuthForm;
