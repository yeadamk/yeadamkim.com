import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const iconSize = 30;

const FooterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: DMSerifDisplay, Arial, Helvetica, sans-serif;
  height: max(3.7rem, 10vh);
  background-color: #1e1e1e;
  color: white;
  font-size: 1.2rem;
  padding: 0.1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    font-size: 1rem;
  }
`;

const SocialMedia = styled.div`
  margin-right: 1rem;

  a {
    padding-left: 0.5rem;
    transition: color 0.2s;
  }

  a:hover {
    color: black;
  }
`;

const Text = styled.div`
  margin-left: 1rem;
`;

const Footer = () => (
  <FooterLayout>
    <Text>
      <AnchorLink to="/">© {new Date().getFullYear()} Yeadam Kim</AnchorLink>
    </Text>
    <SocialMedia>
      <a href="https://github.com/yeadamk/yeadamkim.com" rel="github">
        <FaGithub size={iconSize} />
      </a>
    </SocialMedia>
  </FooterLayout>
);

export default Footer;
