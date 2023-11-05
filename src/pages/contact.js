import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import LinkTree from "../components/linkTree";

const ContactPage = () => (
  <Layout>
    <LinkTree />
  </Layout>
);

export const Head = () => <Seo title="Yeadam Kim | contact" />;
export default ContactPage;
