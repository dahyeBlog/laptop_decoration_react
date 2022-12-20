import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../routes/Navigation";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/MyProfile";
const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {isLoggedIn ? <Navigation userObj={userObj} /> : ""}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home userObj={userObj} />} />
            <Route path="/MyProfile" element={<Profile userObj={userObj} />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
