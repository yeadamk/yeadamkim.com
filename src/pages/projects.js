import * as React from "react";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import Seo from "../components/seo";
import "../styles/pages.css";

const ProjectsPage = () => (
  <Layout>
    <div className="hero-container">
      <h1 className="hero-text">
        <RoughNotation
          className="hero-name"
          content="Will post them soon"
          type="circle"
          color="black"
        />
        <br />
        ._.
      </h1>
    </div>
  </Layout>
);

// Head SEO
export const Head = () => <Seo />;

export default ProjectsPage;
