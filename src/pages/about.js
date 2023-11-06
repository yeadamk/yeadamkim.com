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

  return (
    <Layout>
      <section className="about-background-container">
        <div className="about-page-container fadeIn">
          <h1 className="about-page-header cursive">{aboutHeader}</h1>
          {darkMode ? (
            <p className="about-page-text">
              I'm a third-year{" "}
              <RoughNotation
                content="Mathematics of Computation"
                type="underline"
                color="#cca218"
                width="6"
                className=""
                padding="0"
                delay="500"
              />{" "}
              major at{" "}
              <RoughNotation
                content="UCLA"
                type="underline"
                color="#2774AE"
                width="6"
                className=""
                padding="0"
                delay="1500"
              />
              . While actively exploring various career opportunities at the
              moment, I'm particularly passionate in the field of{" "}
              <RoughNotation
                content="Software Engineering"
                type="underline"
                color="#cca218"
                width="5"
                className=""
                padding="0"
                delay="2000"
              />
              . I love to work on personal projects on the side, tinker around
              with my linux terminal, and keep up with the latest tech videos on
              YouTube. With a strong foundation in{" "}
              <RoughNotation
                content="Mathematics and Computer Science"
                type="underline"
                color="#cca218"
                width="4"
                className=""
                padding="0"
                delay="3000"
              />
              , I hope to pursue a software engineering career upon graduation.
              Apart from academics, I also enjoy playing various{" "}
              <RoughNotation
                content="sports"
                type="underline"
                color="#cca218"
                width="4"
                className=""
                padding="0"
                delay="3500"
              />{" "}
              (e.g. soccer, badminton, volleyball, and more), and have great
              interest in{" "}
              <RoughNotation
                content="jazz piano"
                type="underline"
                color="#cca218"
                width="4"
                className=""
                padding="0"
                delay="4000"
              />
              .
              <br />
              <br />
              <b>
                <i>Yeadam&nbsp;Kim</i>
              </b>
            </p>
          ) : (
            <p className="about-page-text">
              I'm a third-year{" "}
              <RoughNotation
                content="Mathematics of Computation"
                type="highlight"
                color="#ffd54f"
                width="6"
                className=""
                padding="0"
                delay="500"
              />{" "}
              major at{" "}
              <RoughNotation
                content="UCLA"
                type="box"
                color="#2774AE"
                width="4"
                className=""
                padding="0"
                delay="1500"
              />
              . While actively exploring various career opportunities at the
              moment, I'm particularly passionate in the field of{" "}
              <RoughNotation
                content="Software Engineering"
                type="highlight"
                color="#ffd54f"
                width="4"
                className=""
                padding="0"
                delay="2000"
              />
              . I love to work on personal projects on the side, tinker around
              with my linux terminal, and keep up with the latest tech videos on
              YouTube. With a strong foundation in{" "}
              <RoughNotation
                content="Mathematics and Computer Science"
                type="highlight"
                color="#ffd54f"
                width="4"
                className=""
                padding="0"
                delay="3000"
              />
              , I hope to pursue a software engineering career upon graduation.
              Apart from academics, I also enjoy playing various{" "}
              <RoughNotation
                content="sports"
                type="box"
                color="black"
                width="4"
                className=""
                padding="0"
                delay="3500"
              />{" "}
              (e.g. soccer, badminton, volleyball, and more), and have great
              interest in{" "}
              <RoughNotation
                content="jazz piano"
                type="box"
                color="black"
                width="4"
                className=""
                padding="0"
                delay="4000"
              />
              .
              <br />
              <br />
              <b>
                <i>Yeadam&nbsp;Kim</i>
              </b>
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Yeadam Kim | about" path="/about/" />;
export default AboutPage;
