// const path = require("path");

// exports.onCreatePage = async ({page, actions}) =>{
//   const {createPage} = actions
//   console.log('Page - ' + page.page);
//   if(page.path.match(/^\/products/)){
//       createPage({
//           path: "/products/detail",
//           matchPath: "/products/:slug",
//           component: path.resolve("src/templates/productDetail.jsx")
//       })
//       createPage({
//           path: "/products/category",
//           matchPath: "/products/category/:category",
//           component: path.resolve("src/templates/productCategory.jsx")
//       })
//   }
// }

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}