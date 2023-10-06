import * as React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import Seo from "../components/seo";
import "../styles/pages.css";

const AboutPage = () => (
  <Layout>
    <div className="hero-container">
      <h1 className="hero-text">
        <RoughNotation className="hero-name" content="Coming Soon..." type="box" />
      </h1>
    </div>
  </Layout>
);

export const Head = () => <Seo />;

export default AboutPage;
