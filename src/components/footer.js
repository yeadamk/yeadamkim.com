import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "gatsby";

const iconSize = 30;

const FooterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max(3.5rem, 10vh);
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
    <Text>© {new Date().getFullYear()} Yeadam Kim</Text>
    <SocialMedia>
      <Link to="https://www.instagram.com/yeadam.k">
        <FaInstagram size={iconSize} />
      </Link>
      <Link to="https://github.com/yeadamk/yeadamkim.com">
        <FaGithub size={iconSize} />
      </Link>
    </SocialMedia>
  </FooterLayout>
);

export default Footer;
