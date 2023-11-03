import React from "react";
import { ThemeProvider, styled } from "styled-components";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { lightTheme, darkTheme } from "../styles/global/theme";

const Toggle = styled.button.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  position: absolute;
  align-items: center;
  font-size: 2.5rem;
  padding: 10px;
  border: none;
  border-radius: 50%;
  padding: 0;
  background: none;
  top: 1.5rem;
  right: 1.5%;
  box-shadow: 0 0 #33333320;
  z-index: 4;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const ModeButton = ({ darkMode, setDarkMode }) => {
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Toggle
        onClick={() => {
          setDarkMode(!darkMode);
          console.log({ darkMode });
        }}
        className="clickable"
      >
        {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
      </Toggle>
    </ThemeProvider>
  );
};

export default ModeButton;
