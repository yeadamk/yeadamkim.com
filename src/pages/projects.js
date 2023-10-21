import * as React from "react";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import Seo from "../components/seo";
import "../styles/index.scss"; // change to projects.scss

const ProjectsPage = () => (
  <Layout>
    <div className="hero-container fadeIn">
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

export const Head = () => <Seo description="Yeadam's projects page" />;
export default ProjectsPage;
