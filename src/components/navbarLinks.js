import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavItem = styled(Link).attrs((props) => ({
  className: props.className,
}))`
  color: #111111;
  display: inline-block;
  font-size: 1.125rem;
  white-space: nowrap;
  margin: 0 1vw;
  transition: color 200ms ease-in;
  position: relative;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    background: goldenrod;
    content: ".";
    color: transparent;
    height: 1.5px;
    transition: all 0.4s ease-in;
  }

  &:hover {
    display: block;
    color: goldenrod;
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem 0;
    font-size: 1.5rem;
    z-index: 7;
  }
`;

const NavbarLinks = () => {
  return (
    <React.Fragment>
      <NavItem to="/" activeClassName="active">
        Home
      </NavItem>
      <NavItem to="/about" activeClassName="active">
        About
      </NavItem>
      <NavItem to="/projects" activeClassName="active">
        Projects
      </NavItem>
      <NavItem to="/404" activeClassName="active">
        Contact
      </NavItem>
    </React.Fragment>
  );
};

export default NavbarLinks;
