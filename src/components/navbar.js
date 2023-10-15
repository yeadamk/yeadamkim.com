import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import NavbarLinks from "./navbarLinks";

const Navigation = styled.nav`
  position: relative;
  display: flex;
  font-family: DMSerifDisplay, Arial, Helvetica, sans-serif;
  height: max(3.5rem, 10vh);
  background-color: white;
  justify-content: space-between;
  transition: background-color 0.3s ease-in;

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

    background-color: ${(props) =>
      props.isOpen ? "rgb(210, 167, 58)" : "white"};
    transition: background-color 0.3s ease-in;
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

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.2s ease-in;
    top: max(3.5rem, 10vh);
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

  &::before,
  &::after {
    width: 30px;
    height: 3.1px;
    background-color: #111;
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
  margin: auto 0;
  flex: 0 1 2.5rem;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 2.5rem;
  }

  &:hover {
    animation-name: wiggle;
    -webkit-animation-name: wiggle;

    animation-fill-mode: both
    -webkit-animation-fill-mode: both;

    animation-duration: 1s;
    animation-timing-function: linear;
  }

  @keyframes wiggle {
    from {
      -webkit-transform: none;
      transform: none
    }

    15% {
      -webkit-transform: translate3d(-20%,0,0) rotate3d(0,0,1,-8deg);
      transform: translate3d(-20%,0,0) rotate3d(0,0,1,-8deg)
    }

    30% {
      -webkit-transform: translate3d(10%,0,0) rotate3d(0,0,1,5deg);
      transform: translate3d(10%,0,0) rotate3d(0,0,1,7deg)
    }

    45% {
      -webkit-transform: translate3d(-15%,0,0) rotate3d(0,0,1,-5deg);
      transform: translate3d(-15%,0,0) rotate3d(0,0,1,-5deg)
    }

    60% {
      -webkit-transform: translate3d(10%,0,0) rotate3d(0,0,1,2deg);
      transform: translate3d(10%,0,0) rotate3d(0,0,1,2deg)
    }

    75% {
      -webkit-transform: translate3d(-5%,0,0) rotate3d(0,0,1,-2deg);
      transform: translate3d(-5%,0,0) rotate3d(0,0,1,-2deg)
    }

    to {
      -webkit-transform: none;
      transform: none
    }
  }

  @-webkit-keyframes wiggle {
    from {
      -webkit-transform: none;
      transform: none
    }

    15% {
      -webkit-transform: translate3d(-20%,0,0) rotate3d(0,0,1,-8deg);
      transform: translate3d(-20%,0,0) rotate3d(0,0,1,-8deg)
    }

    30% {
      -webkit-transform: translate3d(10%,0,0) rotate3d(0,0,1,5deg);
      transform: translate3d(10%,0,0) rotate3d(0,0,1,7deg)
    }

    45% {
      -webkit-transform: translate3d(-15%,0,0) rotate3d(0,0,1,-5deg);
      transform: translate3d(-15%,0,0) rotate3d(0,0,1,-5deg)
    }

    60% {
      -webkit-transform: translate3d(10%,0,0) rotate3d(0,0,1,2deg);
      transform: translate3d(10%,0,0) rotate3d(0,0,1,2deg)
    }

    75% {
      -webkit-transform: translate3d(-5%,0,0) rotate3d(0,0,1,-2deg);
      transform: translate3d(-5%,0,0) rotate3d(0,0,1,-2deg)
    }

    to {
      -webkit-transform: none;
      transform: none
    }
  }
`;

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation isOpen={navbarOpen}>
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
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar;
