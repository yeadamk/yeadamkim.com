import * as React from "react";
import Layout from "../components/layout";
import RoughNotation from "../components/roughNotation";
import Seo from "../components/seo";
import "../styles/pages/index.scss";

const NotFoundPage = () => (
  <Layout>
    <div className="hero-container">
      <h1 className="hero-text">
        <RoughNotation
          className="cursive"
          content="404: Not&nbsp;Found"
          type="crossed-off"
          color="black"
        />
        <br />
        ._.
      </h1>
    </div>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;
export default NotFoundPage;
