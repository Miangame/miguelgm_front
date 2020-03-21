import React from "react";
import styled from "styled-components";

const Navbar = () => (
  <React.Fragment>
    <NavbarContainer>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
    </NavbarContainer>
  </React.Fragment>
);

const NavbarContainer = styled.ul``;
const NavbarItem = styled.li``;

export default Navbar;
