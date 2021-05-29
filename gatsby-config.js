module.exports = {
  siteMetadata: {
    siteUrl: 'https://dogecoinprojects.org',
    title: "Dogecoin Projects",
  },
  plugins: [
    "gatsby-plugin-cname",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-BSWXZYVZVW",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/dogecoin-300.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
  ],
};
