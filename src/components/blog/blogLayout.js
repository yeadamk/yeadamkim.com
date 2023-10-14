import * as React from "react";
import Footer from "../footer";
import "../../styles/reset.css";
import "../../styles/global.scss";
import BlogNavbar from "./blogNavbar";

const BlogLayout = ({ children }) => {
  return (
    <React.Fragment>
      <BlogNavbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default BlogLayout;
