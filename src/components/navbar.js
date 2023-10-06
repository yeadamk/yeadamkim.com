import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import NavbarLinks from "./navbarLinks";

const Navigation = styled.nav`
  display: flex;
  height: max(5rem, 10vh);
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: max(3.5rem, 10vh);
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: none;
  height: 100%;
  cursor: pointer;
  margin: 0 10vw;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.2s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div.attrs((props) => ({
  className: props.className,
}))`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.2s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.2s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      <LogoWrap as={Link} to="/">
        <StaticImage
          alt="navigation bar logo"
          src="../images/logo.png"
          loading="eager"
        />
      </LogoWrap>
      <Toggle
        className="clickable"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open className="clickable" /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox className="clickable">
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open className="clickable">
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar;
