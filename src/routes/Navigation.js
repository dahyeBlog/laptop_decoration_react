import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">
            <img src="./My project.png" width="80px" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/MyProfile">My Profile</Link>
        </li>
      </ul>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  ul {
    padding: 10px;
    list-style: none;
    display: flex;
    align-content: center;
    justify-content: space-around;
  }

  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: #c45964;
    font-weight: bold;
    font-size: 20px;
    &:hover {
      color: #ea939b;
    }
  }
`;

export default Navigation;
