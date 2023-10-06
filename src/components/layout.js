/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

// import { useStaticQuery, graphql } from "gatsby";
import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/reset.css";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
