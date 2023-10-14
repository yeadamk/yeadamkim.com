import * as React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import Seo from "../components/seo";
import "../styles/pages.scss";

// const links = [
//   {
//     text: "",
//     url: "",
//     description:
//       "",
//   }
// ];

const IndexPage = () => (
  <Layout>
    <div className="hero-container">
      <h1 className="hero-text type-wrapper fadeIn">
        Hi, my&nbsp;name's{" "}
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
    </div>
    <div className="link-container"></div>
  </Layout>
);

export const Head = () => <Seo />;
export default IndexPage;
