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
