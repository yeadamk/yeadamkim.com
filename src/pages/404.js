import React from "react";
import Layout from "/src/components/layout";
import Seo from "/src/components/seo";
import "/src/styles/pages/index.scss";

const NotFoundPage = () => (
  <Layout>
    <div className="hero-container">
      <h1 className="hero-text">
        404: Not&nbsp;Found
        <br />
        ._.
      </h1>
    </div>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;
export default NotFoundPage;
