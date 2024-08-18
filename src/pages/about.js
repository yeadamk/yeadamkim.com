import React, { useEffect, useContext } from "react";
import { ModeContext } from "../components/modeProvider";
import RoughNotation from "../components/roughNotation";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/pages/about.scss";

const aboutHeader = "Hello there?";

const AboutPage = () => {
  const { darkMode } = useContext(ModeContext);

  useEffect(() => {
    if (darkMode) {
      document
        .querySelector(".about-background-container")
        .classList.add("darkMode-background");
      document
        .querySelector(".about-page-container")
        .classList.add("darkMode-text");
    } else {
      document
        .querySelector(".about-background-container")
        .classList.remove("darkMode-background");
      document
        .querySelector(".about-page-container")
        .classList.remove("darkMode-text");
    }
  }, [darkMode]);

  const highlightType = darkMode ? "underline" : "highlight";
  const highlightColor = darkMode ? {
    computation: "#cca218",
    ucla: "#2774ae",
    development: "#8bc34a",
    mathCS: "#cca218",
    swe: "#9c27a1",
    sports: "#ff9800",
    piano: "#ca1e63",
  } : {
    computation: "#ffd54f",
    ucla: "#ffd54f",
    development: "#ffd54f",
    mathCS: "#ffd54f",
    swe: "#ffd54f",
    sports: "#ffd54f",
    piano: "#ffd54f",
  };

  return (
    <Layout>
      <section className="about-background-container">
        <div className="about-page-container fadeIn">
          <h1 className="about-page-header cursive">{aboutHeader}</h1>
          <p className="about-page-text">
            I'm a fourth-year{" "}
            <RoughNotation
              content="Mathematics of Computation"
              type={highlightType}
              color={highlightColor.computation}
              width="4"
              padding="0"
              delay="500"
            />{" "}
            major at{" "}
            <RoughNotation
              content="UCLA"
              type={highlightType}
              color={highlightColor.ucla}
              width="5"
              padding="0"
              delay="1000"
            />
            . I'm interested in{" "}
            <RoughNotation
              content="full-stack or back-end development"
              type={highlightType}
              color={highlightColor.development}
              width="4"
              padding="0"
              delay="2000"
            />
            , delivering products, features, and optimizations directly to end-users. 
            I love to work on personal projects on the side, tinker around
            with my linux terminal, and keep up with the latest tech videos on
            YouTube. With a strong foundation in{" "}
            <RoughNotation
              content="Mathematics and Computer Science"
              type={highlightType}
              color={highlightColor.mathCS}
              width="4"
              padding="0"
              delay="4000"
            />
            , I’m eager to tackle real-world challenges and bring my passion in{" "}
            <RoughNotation
              content="software engineering"
              type={highlightType}
              color={highlightColor.swe}
              width="4"
              padding="0"
              delay="5000"
            />{" "}
            to create meaningful solutions that benefit people around the world. 
            Apart from academics, I also enjoy playing various{" "}
            <RoughNotation
              content="sports"
              type={highlightType}
              color={highlightColor.sports}
              width="4"
              padding="0"
              delay="5500"
            />{" "}
            (e.g. soccer, badminton, volleyball, and more), and have great
            interest in{" "}
            <RoughNotation
              content="jazz piano"
              type={highlightType}
              color={highlightColor.piano}
              width="4"
              padding="0"
              delay="6000"
            />
            .
            <br />
            <br />
            <b>
              <i>Yeadam&nbsp;Kim</i>
            </b>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="About | Yeadam Kim" path="/about/" />;
export default AboutPage;
