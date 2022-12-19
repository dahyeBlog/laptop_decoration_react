import React, { useState, useEffect } from "react";
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

  return <>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "로딩중..."}</>;
}

export default App;
