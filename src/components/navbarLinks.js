import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavItem = styled(Link).attrs((props) => ({
  className: props.className,
}))`
  color: #111111;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-family: Lato-Regular, Arial, Helvetica, sans-serif;
  text-transform: lowercase;
  font-weight: 600;
  white-space: nowrap;
  margin: 0 1.2vw;
  transition: color 200ms ease-in;
  position: relative;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    background: goldenrod;
    content: "";
    color: transparent;
    height: 2px;
    transition: all 0.3s ease-in;
  }

  &:hover {
    color: goldenrod;
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    margin: 0 2vw;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 0;
    font-size: 1.5rem;
    z-index: 7;
  }
`;

const NavAnchorItem = styled(AnchorLink).attrs((props) => ({
  className: props.className,
}))`
  color: #111111;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-family: Lato-Regular, Arial, Helvetica, sans-serif;
  text-transform: lowercase;
  font-weight: 600;
  white-space: nowrap;
  margin: 0 1.2vw;
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
    height: 2px;
    transition: all 0.3s ease-in;
  }

  &:hover {
    color: goldenrod;
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    margin: 0 2vw;
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
        home
      </NavItem>
      {/* <NavItem to="/about" activeClassName="active">
        about
      </NavItem> */}
      <NavAnchorItem to="/#about" stripHash>
        about
      </NavAnchorItem>
      <NavItem to="/projects" activeClassName="active">
        projects
      </NavItem>
      <NavAnchorItem to="/#contact" stripHash>
        contact
      </NavAnchorItem>
    </React.Fragment>
  );
};

export default NavbarLinks;
