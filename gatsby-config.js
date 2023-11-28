/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Yeadam Kim`,
    description: `Yeadam Kim is an undergraduate Mathematics of Computation major at the University of California, Los Angeles.`,
    author: `Yeadam Kim`,
    keywords: `Yeadam Kim, dev, developer, personal website, portfolio`,
    siteUrl: `https://www.yeadamkim.com`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `react-rough-notation`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(filter: {path: {glob: "!/blog/*"}}) {
            nodes {
              path
            }
          }
          allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
            nodes {
              modifiedTime(formatString: "YYYY-MM-DD")
              name
            }
          }
        }`,
        resolveSiteUrl: ({ site }) => {
          return site.siteMetadata.siteUrl;
        },
        resolvePages: ({
          allSitePage: { nodes: sitePages },
          allFile: { nodes: pageFiles },
        }) => {
          return sitePages.map((page) => {
            const pageFile = pageFiles.find((node) => {
              const fileName = node.name === "index" ? "/" : `/${node.name}/`;
              return page.path === fileName;
            });

            return { ...page, ...pageFile?.nodes };
          });
        },
        serialize: ({ path, modifiedTime }) => {
          return {
            url: path,
            lastmod: modifiedTime,
          };
        },
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yeadam Kim`,
        short_name: `YK`,
        start_url: `/`,
        background_color: `#D2A73A`,
        display: `minimal-ui`,
        icon: `src/images/favicon_darkblue/favicon.png`,
      },
    },
  ],
};
