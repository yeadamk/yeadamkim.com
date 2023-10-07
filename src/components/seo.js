import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

/*
 * SEO
 *
 * title: Sets custom title
 * description: Sets custom description
 * author: Sets custom author
 * children: Other meta tags
 */
function Seo({ title, description, author, children }) {
  const { site } = useStaticQuery(
    // From gatsby-config.js
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `,
  );

  const seo = {
    title: title || site.siteMetadata?.title || "",
    description: description || site.siteMetadata?.description || "",
    author: author || site.siteMetadata?.author || "",
    keywords: site.siteMetadata?.keywords || "",
    homeUrl: site.siteMetadata?.siteUrl || "/",
  };

  return (
    <React.Fragment>
      {/* Essential Meta Tags */}
      <title>{title ? `${title}` : seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="keywords" content={seo.keywords} />

      {/* Canonical URLs */}
      <link rel="canonical" href="https://yeadamkim.netlify.app" />
      <link rel="canonical" href="https://main--yeadamkim.netlify.app" />

      {/* Social Media */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.homeUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {children}

      {/* For google search console */}
      <meta
        name="google-site-verification"
        content="JsbkfNl-IvBQi6tZLX1Jgt0njq5LOnTfweFzRQbCnIA"
      />
    </React.Fragment>
  );
}

export default Seo;