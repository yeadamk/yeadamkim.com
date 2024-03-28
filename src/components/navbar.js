import React, { useState, useContext } from "react";
import { ModeContext } from "./modeProvider";
import { styled, ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import NavbarLinks from "./navbarLinks";
import { darkTheme, lightTheme } from "../styles/global/theme";

// Activates hamburger menu bar at width 768px
const Navigation = styled.nav`
  position: relative;
  display: flex;
  font-family: DMSerifDisplay, Arial, Helvetica, sans-serif;
  height: 5rem;
  background-color: ${(props) => props.theme.navbar};
  justify-content: space-between;

  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 10;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: max(3.7rem, 10vh);
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
  margin: 0 5vw;
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
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: ${(props) => props.theme.navbox};
    transition: all 200ms ease-in;
    top: max(3.7rem, 10vh);
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div.attrs((props) => ({
  className: props.className,
}))`
  background-color: ${(props) => props.theme.hamburger};
  transition: background-color 200ms ease-in;
  width: 30px;
  height: 3px;
  transition: all 0.2s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  &::before,
  &::after {
    width: 30px;
    height: 3.2px;
    background-color: ${(props) => props.theme.hamburger};
    content: "";
    position: absolute;
    transition: all 0.2s linear;
  }

  &::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  &::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

const LogoWrap = styled.div`
  @keyframes spin {
    40% {
      transform: rotateY(-90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  @-webkit-keyframes spin {
    40% {
      -webkit-transform: rotateY(-90deg);
    }
    100% {
      -webkit-transform: rotateY(0deg);
    }
  }

  margin: auto 0;
  flex: 0 1 2.5rem;

  animation-name: spin;
  -webkit-animation-name: spin;

  animation-fill-mode: both
  -webkit-animation-fill-mode: both;

  animation-duration: 1s;
  animation-timing-function: ease-out;

  @media (max-width: 768px) {
    flex: 0 1 2.5rem;
    margin: auto .5rem;
  }
`;

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { darkMode } = useContext(ModeContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <Hamburger open className="clickable" />
          ) : (
            <Hamburger className="clickable" />
          )}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        )}
      </Navigation>
    </ThemeProvider>
  );
};

export default Navbar;
