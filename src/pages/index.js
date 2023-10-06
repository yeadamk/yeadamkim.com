import * as React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import Seo from "../components/seo";
import "../styles/pages.css";

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
      <h1 className="hero-text">
        Hello, my&nbsp;name's{" "}
        <RoughNotation className="hero-name" content="Yeadam&nbsp;Kim!" />
      </h1>
    </div>
  </Layout>
);

/**
 * Head export to define metadata for the page
 */
export const Head = () => <Seo />;

export default IndexPage;
