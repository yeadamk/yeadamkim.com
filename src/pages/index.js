import * as React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import Seo from "../components/seo";
import "../styles/index.scss";

const about =
  "I'm a third-year Mathematics of Computation major at UCLA.\n\nI'm exploring many career possibilities at the moment, but I am strongly passionate in the field of software engineering. With a solid foundation in both mathematics and computer science, my goal is to embark on a career where I can leverage my knowledge to make a meaningful impact on the world. Beyond my studies, I enjoy playing soccer and practicing jazz piano.";

const projects =
  "In completion of this website, I will post all of my past projects here to present the works I've been doing along the way.\n\nThank you for visiting!";

const linkTree = [
  {
    text: "Home",
    url: "https://www.yeadamkim.com",
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

const IndexPage = () => (
  <Layout>
    <main className="hero-container">
      <h1 className="hero-text type-wrapper fadeIn">
        Hi, my name's{" "}
        <RoughNotation
          content="Yeadam&nbsp;Kim"
          type="underline"
          color="black"
          className="hero-name"
          width="5"
          padding="0"
        />
        <span className="placeholder"></span>
      </h1>
    </main>
    <div className="gradient-container">
      <section id="about" className="about-container">
        <header className="about-header">about</header>
        <p className="about-text">{about}</p>
        <header className="about-header-right">projects</header>
        <p className="about-text-right">{projects}</p>
      </section>
      <ul id="contact" className="link-container">
        <u className="link-header">Link Tree</u>
        {linkTree.map((link) => (
          <li key={link.url} className="link-item">
            <a className="link-text" href={`${link.url}`}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export const Head = () => <Seo />;
export default IndexPage;
