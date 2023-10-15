import * as React from "react";
// import { Link } from "gatsby";
// import RoughNotation from "../components/roughNotation";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/about.scss";

const AboutPage = () => (
  <Layout>
    <div className="hero-container">
      <h1 className="hero-text cursive">Still under development...</h1>
    </div>
  </Layout>
);

export const Head = () => <Seo description="Yeadam's about page" />;
export default AboutPage;
