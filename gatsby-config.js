/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Yeadam Kim | Dev`,
    description: `Yeadam's personal website`,
    author: `Yeadam Kim`,
    keywords: `Yeadam Kim, Personal website`,
    siteUrl: `https://www.yeadamkim.com`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `react-rough-notation`,
    `babel-plugin-styled-components`,
    `gatsby-transformer-remark`,
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
    {
      resolve: `npm`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/content`,
      },
    },
  ],
};
