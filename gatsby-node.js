const path = require("path");

exports.onCreatePage = async ({page, actions}) =>{
  const {createPage} = actions
  console.log('Page - ' + page.page);
  if(page.path.match(/^\/products/)){
      createPage({
          path: "/products/detail",
          matchPath: "/products/:slug",
          component: path.resolve("src/templates/productDetail.jsx")
      })
  }
}