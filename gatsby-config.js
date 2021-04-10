require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "gatsby-sanity-shopify",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
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
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBix2hqlqS5uOpVQX30A8Jo8tl15bK_hzk",
          authDomain: "gitftin.firebaseapp.com",
          projectId: "gitftin",
          storageBucket: "gitftin.appspot.com",
          messagingSenderId: "1054148980050",
          appId: "1:1054148980050:web:f58b3f36b1768a8da8de8b",
          measurementId: "G-YM5KG1M4DP",
        },
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "bacalahshop.myshopify.com",
        accessToken: "981ecb8da5a55216f463b62e9833b806",
        downloadImages: false
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_API_TOKEN,
      },
    },
  ],
};
