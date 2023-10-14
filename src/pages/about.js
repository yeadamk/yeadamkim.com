import * as React from "react";
// import { Link } from "gatsby";
// import RoughNotation from "../components/roughNotation";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/pages.scss";

const AboutPage = () => (
  <Layout>
    <div className="hero-container">
      <h1 className="hero-text cursive">Coming Soon...</h1>
    </div>
  </Layout>
);

export const Head = () => <Seo description="Yeadam's about page" />;
export default AboutPage;
