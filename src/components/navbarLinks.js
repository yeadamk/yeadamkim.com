import React, { useContext } from "react";
import { styled, ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import { ModeContext } from "./modeProvider";
import { darkTheme, lightTheme } from "../styles/global/theme";
// import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavItem = styled(Link).attrs((props) => ({
  className: props.className,
}))`
  color: ${(props) => props.theme.navbarText};
  transition: ${(props) => (props.dark ? "none" : "color 200ms ease-in")};
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: Lato-Regular, Arial, Helvetica, sans-serif;
  text-transform: lowercase;
  font-weight: 600;
  white-space: nowrap;
  margin: 0 1.2vw;
  position: relative;

  &::after {
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    width: 0%;
    background: goldenrod;
    content: "";
    color: transparent;
    height: 2.5px;
    transition: width 0.3s ease-in;
  }

  &:hover {
    color: goldenrod;
    &::after {
      width: 100%;
    }
  }

  @media (hover: none) {
    &:hover {
      color: goldenrod;
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    margin: 0 2vw;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 0;
    font-size: 1.5rem;
    z-index: 7;
    transition: color 0s;

    &:hover {
      &::after {
        display: none;
        transition: none;
      }
    }
  }
`;

// const NavAnchorItem = styled(AnchorLink).attrs((props) => ({
//   className: props.className,
// }))`
//   color: ${(props) => props.theme.navbarText};
//   transition: color 200ms ease-in;
//   display: flex;
//   align-items: center;
//   font-size: 1.125rem;
//   font-family: Lato-Regular, Arial, Helvetica, sans-serif;
//   text-transform: lowercase;
//   font-weight: 600;
//   white-space: nowrap;
//   margin: 0 1.2vw;
//   position: relative;

//   &::after {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     width: 0%;
//     background: goldenrod;
//     content: ".";
//     color: transparent;
//     height: 2px;
//     transition: all 0.3s ease-in;
//   }

//   &:hover {
//     color: goldenrod;
//     &::after {
//       width: 100%;
//     }
//   }

//   @media (max-width: 1024px) {
//     margin: 0 2vw;
//   }

//   @media (max-width: 768px) {
//     padding: 1.2rem 0;
//     font-size: 1.5rem;
//     z-index: 7;
//   }
// `;

const NavbarLinks = () => {
  const { darkMode } = useContext(ModeContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <NavItem to="/" activeClassName="active" dark={darkMode ? 1 : 0}>
        home
      </NavItem>
      <NavItem to="/about" activeClassName="active" dark={darkMode ? 1 : 0}>
        about
      </NavItem>
      <NavItem to="/projects" activeClassName="active" dark={darkMode ? 1 : 0}>
        projects
      </NavItem>
      <NavItem to="/contact" activeClassName="active" dark={darkMode ? 1 : 0}>
        contact
      </NavItem>
    </ThemeProvider>
  );
};

export default NavbarLinks;
