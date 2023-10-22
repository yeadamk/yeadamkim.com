import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";
import "../styles/pages/blog.scss";

function BlogPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          excerpt(format: MARKDOWN, truncate: true, pruneLength: 100)
          frontmatter {
            author
            date(formatString: "MMM D YYYY")
            title
            description
            slug # Using this slug at the moment
          }
          fields {
            slug # slug: filename
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes || {};

  return (
    <Layout>
      <div className="blog-container">
        <h1 className="blog-title">Yeadam's Blog&nbsp;Posts</h1>
        <ul className="blog-posts-container">
          {posts.map((post) => (
            <li key={post.id} className="blog-posts">
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const Head = () => (
  <Seo title="Yeadam Kim | Blog" description="Yeadam's blog page" />
);
export default BlogPage;
