import * as React from "react";
import RoughNotation from "../components/roughNotation";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/about.scss";

const aboutHeader = "Hello there?";

const AboutPage = () => (
  <Layout>
    <div className="about-page-container">
      <h1 className="about-page-header cursive">{aboutHeader}</h1>
      <p className="about-page-text">
        I'm a third-year{" "}
        <RoughNotation
          content="Mathematics of Computation"
          type="underline"
          color="#ffd54f"
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
        . While actively exploring various career opportunities at the moment,
        I'm particularly passionate in the field of{" "}
        <RoughNotation
          content="Software Engineering"
          type="highlight"
          color="#ffd54f"
          width="4"
          className=""
          padding="0"
          delay="2000"
        />
        . I love to work on personal projects on the side, tinker around with my
        linux terminal, and watch fun tech videos on YouTube. With a strong
        foundation in{" "}
        <RoughNotation
          content="Mathematics and Computer Science"
          type="highlight"
          color="#ffd54f"
          width="4"
          className=""
          padding="0"
          delay="3000"
        />
        , I hope to pursue a software engineering career upon graduation. Apart
        from academics, I also enjoy playing various{" "}
        <RoughNotation
          content="sports"
          type="highlight"
          color="#ffd54f"
          width="4"
          className=""
          padding="0"
          delay="3500"
        />{" "}
        (e.g. soccer, badminton, volleyball, and more), and have great interest
        in{" "}
        <RoughNotation
          content="jazz piano"
          type="highlight"
          color="#ffd54f"
          width="4"
          className=""
          padding="0"
          delay="4000"
        />
        .
        <br />
        <br />
        <b>
          <i>
            <RoughNotation
              content="Yeadam Kim"
              type="underline"
              color="black"
              width="4"
              className=""
              padding="0"
              delay="5000"
            />
          </i>
        </b>
      </p>
    </div>
  </Layout>
);

export const Head = () => <Seo description="Yeadam's about page" />;
export default AboutPage;
