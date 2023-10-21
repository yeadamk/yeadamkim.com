import * as React from "react";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import Seo from "../components/seo";
import "../styles/index.scss";
import "../styles/projects.scss";

const ProjectsPage = () => (
  <Layout>
    <section className="projects-background-container">
      <div className="projects-container fadeIn">
        <h1 className="projects-text">
          <RoughNotation
            content="Will post them soon"
            type="box"
            color="black"
            width="3"
            delay="500"
          />
          <br />
          ._.
        </h1>
      </div>
    </section>
  </Layout>
);

export const Head = () => <Seo description="Yeadam's projects page" />;
export default ProjectsPage;
