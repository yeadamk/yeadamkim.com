import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../styles/pages/contact.scss";

const linkTree = [
  {
    text: "Email",
    url: "mailto:hiyeadam@gmail.com",
  },
  {
    text: "GitHub",
    url: "https://github.com/yeadamk",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/yeadamkim/",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/yeadam.k",
  },
];

const ContactPage = () => (
  <Layout>
    <section className="link-background-container">
      <div className="link-page-container fadeIn">
        <header className="link-page-header">Link Tree</header>
        {linkTree.map((link) => (
          <a key={link.url} className="link-page-item" href={`${link.url}`}>
            <div className="link-page-text">{link.text}</div>
          </a>
        ))}
      </div>
    </section>
  </Layout>
);

export const Head = () => (
  <Seo title="Yeadam Kim | contact"/>
);
export default ContactPage;
