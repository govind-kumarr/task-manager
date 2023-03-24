import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <button className="login_btn">login</button>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  .login_btn {
    text-transform: uppercase;
  }
`;
