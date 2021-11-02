import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, StyledNavLink, StyledNavLinkHome } from './styled-components';
const Navbar = () => {
  return (
    // <Nav>
    //   <StyledNavLinkHome to="/">Home</StyledNavLinkHome>
    //   <StyledNavLink to="/robots">Robots</StyledNavLink>
    //   <StyledNavLink to="/projects">Projects</StyledNavLink>
    // </Nav>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/robots">Robots</Link>
      <Link to="/projects">Projects</Link>
    </Nav>
  );
};
export default Navbar;
