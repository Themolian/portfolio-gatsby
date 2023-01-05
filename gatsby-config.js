/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Jamie Curran - Leicestershire Based Front End Developer`,
    description: `Hi! I'm Jamie - I've been active in the Tech Community since 2016 and I'm a massive nerd besides!`,
    twitterUsername: `@themolian`,
    image: `/src/images/logo.png`,
    siteUrl: `https://www.jamiecurran.tech`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/pages/blog",
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/pages/projects",
      },
      __key: "projects",
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: "https://cms.jamiecurran.tech/graphql",
      },
      schema: {
        typePrefix: `Wp`,
        requestConcurrency: 0.5,
        previewRequestConcurrency: 0.5,
      },
      develop: {
        hardCacheMediaFiles: true,
      },
      // type: {
      //   Post: {
      //     limit: {
      //       process.env.NODE_ENV === `development`
      //     }
      //   }
      // }
    },
  ],
};
