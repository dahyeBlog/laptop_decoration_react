import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppRouter from "./Router";
import { auth } from "../firebase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <Container>
          <AppRouter isLoggedIn={isLoggedIn} />{" "}
        </Container>
      ) : (
        "로딩중..."
      )}
    </>
  );
}
const Container = styled.div`
`;

export default App;
