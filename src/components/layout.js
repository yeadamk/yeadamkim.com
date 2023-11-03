import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/global/reset.css";
import "../styles/global/global.scss";

const Layout = ({ children }) => {
  return (
    <React.StrictMode>
      <Navbar />
      {children}
      <Footer />
    </React.StrictMode>
  );
};

export default Layout;
