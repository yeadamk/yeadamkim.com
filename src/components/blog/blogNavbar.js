import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Navigation = styled.nav`
  position: relative;
  display: flex;
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

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 2.5rem;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 2rem;
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

const BlogNavbar = () => {
  <Navigation>
    <LogoWrap as={Link} to="/">
      <StaticImage
        alt="navigation bar logo"
        src="../../images/logo.png"
        loading="eager"
      />
    </LogoWrap>
  </Navigation>;
};

export default BlogNavbar;
