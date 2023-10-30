/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Yeadam Kim`,
    description: `Yeadam Kim is an undergraduate at UCLA, studying mathematics and computer science.`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
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
