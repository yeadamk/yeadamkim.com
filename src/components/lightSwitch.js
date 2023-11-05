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
  font-size: max(5vh, 2rem);
  padding: 10px;
  border: none;
  border-radius: 50%;
  padding: 0;
  background: none;
  top: 0;
  right: 0;
  z-index: 4;

  &:hover {
    transform: scale(1.07);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 564px) {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const LightSwitch = ({ darkMode, setDarkMode }) => {
  const dark = darkTheme.toggle;
  const light = lightTheme.toggle;

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Toggle
        onClick={() => {
          setDarkMode(!darkMode);
          console.log({ darkMode });
        }}
        className="clickable"
      >
        {darkMode ? (
          <MdDarkMode color={dark} />
        ) : (
          <MdOutlineDarkMode color={light} />
        )}
      </Toggle>
    </ThemeProvider>
  );
};

export default LightSwitch;
