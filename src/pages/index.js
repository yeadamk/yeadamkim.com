import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import Seo from "../components/seo";
import "../styles/index.scss";

const about =
  "I'm a third-year Mathematics of Computation major at UCLA.\n\nWhile actively exploring various career opportunities at the moment, I'm particularly passionate in the field of software engineering. I love to work on personal projects on the side, tinker around with my linux terminal, and watch fun tech videos on YouTube. With a strong foundation in mathematics and computer science, I hope to pursue a software engineering career upon graduation. Apart from academics, I also enjoy playing various sports (e.g. soccer, badminton, volleyball, and more), and have great interest in jazz piano.";

const projects =
  "In completion of this website, I will post all of my past projects here to present the works I've been doing along the way.\n\nThank you for visiting!";

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
      <ul id="contact" className="link-container">
        <section
          className="link-header"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-delay="0"
        >
          Link Tree
        </section>
        {linkTree.map((link) => (
          <a
            key={link.url}
            className="link-item"
            href={`${link.url}`}
            data-sal="fade"
            data-sal-duration="500"
            data-sal-delay="0"
          >
            <div className="link-text">{link.text}</div>
          </a>
        ))}
      </ul>
    </div>
  </Layout>
);

export const Head = () => <Seo />;
export default IndexPage;
