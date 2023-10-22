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
          Will&nbsp;post them&nbsp;soon
          <br />
          <p className="check-github">
            In the meantime, check&nbsp;my&nbsp;
            <a href="https://github.com/yeadamk" rel="GitHub">
              <u>GitHub</u>
            </a>
          </p>
        </h1>
      </div>
    </section>
  </Layout>
);

export const Head = () => <Seo description="Yeadam's projects page" />;
export default ProjectsPage;
