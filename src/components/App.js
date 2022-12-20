import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppRouter from "./Router";
import { auth } from "../firebase";
import { updateCurrentUser } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = async () => {
  await updateCurrentUser(auth, auth.currentUser)
  setUserObj(auth.currentUser)
  }


  return (
    <>
      {init ? (
        <Container>
          <AppRouter isLoggedIn={isLoggedIn} refreshUser={refreshUser} userObj={userObj} />
        </Container>
      ) : (
        "로딩중..."
      )}
    </>
  );
}
const Container = styled.div``;

export default App;
