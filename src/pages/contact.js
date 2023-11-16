import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import LinkTree from "../components/linkTree";

const ContactPage = () => (
  <Layout>
    <LinkTree />
  </Layout>
);

export const Head = () => <Seo title="Contact | Yeadam Kim" path="/contact/" />;
export default ContactPage;
