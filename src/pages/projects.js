import React, { useContext, useEffect } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/pages/projects.scss";
import { ModeContext } from "../components/modeProvider";
import { MdOpenInNew } from "react-icons/md";

const ProjectsPage = () => {
  const { darkMode } = useContext(ModeContext);

  useEffect(() => {
    if (darkMode) {
      document
        .querySelector(".projects-background-container")
        .classList.add("darkMode-background");
    } else {
      document
        .querySelector(".projects-background-container")
        .classList.remove("darkMode-background");
    }
  }, [darkMode]);

  return (
    <Layout>
      <section className="projects-background-container">
        <div className="projects-container fadeIn">
          <h1 className="projects-text">
            <span className="other-text">Check&nbsp;out&nbsp;my </span>
            <a
              href="https://github.com/yeadamk"
              rel="noreferrer"
              target="_blank"
              className="github-text"
            >
              GitHub
              <MdOpenInNew className="new-tab-icon" />
            </a>
            <br />
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Yeadam Kim | projects" />;
export default ProjectsPage;
