import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/global/theme";
import { ModeContext } from "./modeProvider";

const linkTree = [
  {
    text: "Email",
    url: "mailto:hiyeadam@gmail.com",
  },
  {
    text: "GitHub",
    url: "https://github.com/yeadamk",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/yeadamkim/",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/yeadam.k",
  },
];

const LinkBackground = styled.section`
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.linkStart} 0%,
    ${(props) => props.theme.linkEnd} 100%
  );
`;

const LinkIndexBackground = styled.section`
  background: transparent;
`;

const LinkContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: column;
  min-height: max(90vh, 30rem);
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    height: 80vh;
    padding-bottom: 0;
  }
`;

const LinkHeader = styled.header`
  display: block;
  font-family: PixelifySans, Helvetica, sans-serif;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: max(3rem, 7vh);
  margin-bottom: max(0.8rem, 3vh);

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }

  @media (max-height: 768px) {
    margin-top: max(5rem, 5vh);
  }

  @media (max-width: 375px) {
    font-size: 2rem;
    margin-top: 3rem;
  }
`;

const LinkItem = styled.a`
  display: block;
  color: ${(props) => props.theme.linkText};
  background-color: ${(props) => props.theme.linkItem};
  border-radius: 2rem;
  width: 70%;
  text-align: center;
  margin: 1.1rem auto;
  padding: 1rem 2rem;
  transition: all 300ms ease-in;

  &:last-child {
    margin-bottom: 2.5rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.linkHover};
    color: ${(props) => props.theme.linkTextHover};
    transition: all 0s;
  }

  @media (hover: none) {
    &:hover {
      color: inherit;
      background-color: white;
    }
  }

  @media (max-width: 1024px) {
    margin: 1.1rem auto;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 768px) {
    margin: 1.1rem auto;
    padding: 0.5rem 0.8rem;

    &:last-child {
      margin-bottom: 8rem;
    }
  }

  @media (max-height: 650px) {
    padding: 0.5rem 2rem;
  }
`;

const LinkText = styled.div`
  font-family: PixelifySans, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 590;
  text-transform: uppercase;

  @media (max-width: 375px) {
    font-size: 1.125rem;
  }
`;

const LinkTree = ({ indexPage }) => {
  const { darkMode } = useContext(ModeContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {indexPage ? (
        <LinkIndexBackground>
          <LinkContainer className="fadeIn">
            <LinkHeader>Link Tree</LinkHeader>
            {linkTree.map((link) => (
              <LinkItem key={link.url} href={`${link.url}`}>
                <LinkText>{link.text}</LinkText>
              </LinkItem>
            ))}
          </LinkContainer>
        </LinkIndexBackground>
      ) : (
        <LinkBackground>
          <LinkContainer className="fadeIn">
            <LinkHeader>Link Tree</LinkHeader>
            {linkTree.map((link) => (
              <LinkItem key={link.url} href={`${link.url}`}>
                <LinkText>{link.text}</LinkText>
              </LinkItem>
            ))}
          </LinkContainer>
        </LinkBackground>
      )}
    </ThemeProvider>
  );
};

export default LinkTree;
