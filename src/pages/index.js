import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";
import { ModeContext } from "../components/modeProvider";
import LightSwitch from "../components/lightSwitch";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import LinkTree from "../components/linkTree";
import Seo from "../components/seo";
import "../styles/pages/index.scss";

const about =
  "I'm a third-year Mathematics of Computation major at UCLA.\n\nWhile actively exploring various career opportunities at the moment, I'm particularly passionate in the field of software engineering. I love to work on personal projects on the side, tinker around with my linux terminal, and keep up with the latest tech videos on YouTube. With a strong foundation in mathematics and computer science, I hope to pursue a software engineering career upon graduation. Apart from academics, I also enjoy playing various sports (e.g. soccer, badminton, volleyball, and more), and have great interest in jazz piano.";

const projects =
  "Every day, my passion in software engineering is fueled by working on personal projects. I like to bring my creative ideas to life, to truly translate my acquired knowledge to a fully functioning program. From making python/bash scripts automating mundane tasks to building a fully scalable web application using React, I have developed a diverse range of projects in languages such as C, C++, JavaScript, and Python.";

const IndexPage = () => {
  const { darkMode, setDarkMode } = useContext(ModeContext);

  useEffect(() => {
    if (darkMode) {
      document
        .querySelector(".hero-container")
        .classList.add("darkMode-background");
      document
        .querySelector(".gradient-container")
        .classList.add("darkMode-background");
      document.querySelector(".hero-text").classList.add("darkMode-text");
      document
        .querySelector(".about-header")
        .classList.add("darkMode-border-right");
      document
        .querySelector(".about-text")
        .classList.add("darkMode-border-right");
      document
        .querySelector(".about-header-right")
        .classList.add("darkMode-border-left");
      document
        .querySelector(".about-text-right")
        .classList.add("darkMode-border-left");
    } else {
      document
        .querySelector(".hero-container")
        .classList.remove("darkMode-background");
      document
        .querySelector(".gradient-container")
        .classList.remove("darkMode-background");
      document.querySelector(".hero-text").classList.remove("darkMode-text");
      document
        .querySelector(".about-header")
        .classList.remove("darkMode-border-right");
      document
        .querySelector(".about-text")
        .classList.remove("darkMode-border-right");
      document
        .querySelector(".about-header-right")
        .classList.remove("darkMode-border-left");
      document
        .querySelector(".about-text-right")
        .classList.remove("darkMode-border-left");
    }
  }, [darkMode]);

  return (
    <Layout>
      <main className="hero-container">
        <h1 className="hero-text fadeIn">
          <span className="hero-other-text type-wrapper">
            <span className="placeholder"></span>
            Hi, my name's&nbsp;
          </span>
          <div className="toggle-container">
            {darkMode ? (
              <RoughNotation
                content="Yeadam&nbsp;Kim"
                type="underline"
                color="white"
                className="hero-name"
                width="5"
                padding="0"
              />
            ) : (
              <RoughNotation
                content="Yeadam&nbsp;Kim"
                type="underline"
                color="black"
                className="hero-name"
                width="5"
                padding="0"
              />
            )}
            <LightSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
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
        <LinkTree indexPage={true} />
      </div>
    </Layout>
  );
};

// Using default SEO from 'gatsby-config.js'
export const Head = () => <Seo path="/" />;
export default IndexPage;
