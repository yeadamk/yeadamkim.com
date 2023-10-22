import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import Seo from "../components/seo";
import "../styles/pages/index.scss";

export const about =
  "I'm a third-year Mathematics of Computation major at UCLA.\n\nWhile actively exploring various career opportunities at the moment, I'm particularly passionate in the field of software engineering. I love to work on personal projects on the side, tinker around with my linux terminal, and keep up with the latest tech videos on YouTube. With a strong foundation in mathematics and computer science, I hope to pursue a software engineering career upon graduation. Apart from academics, I also enjoy playing various sports (e.g. soccer, badminton, volleyball, and more), and have great interest in jazz piano.";

const projects =
  "I am planning to post my past projects here in the future. In the mean time, you can check out my GitHub below. The link is provided under the link tree section.\n\nThank you for visiting!";

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
        <div>
          <header className="about-header">
            <Link to="/about">about</Link>
          </header>
          <p className="about-text">{about}</p>
        </div>
        <div>
          <header className="about-header-right">
            <Link to="/projects">projects</Link>
          </header>
          <p className="about-text-right">{projects}</p>
        </div>
      </section>
      <section id="contact" className="link-container">
        <header className="link-header">Link Tree</header>
        {linkTree.map((link) => (
          <a key={link.url} className="link-item" href={`${link.url}`}>
            <div className="link-text">{link.text}</div>
          </a>
        ))}
      </section>
    </div>
  </Layout>
);

export const Head = () => <Seo />;
export default IndexPage;
