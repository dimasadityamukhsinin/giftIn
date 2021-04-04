const path = require("path");

exports.onCreatePage = async ({page, actions}) =>{
  const {createPage} = actions
  console.log('Page - ' + page.page);
  if(page.path.match(/^\/products/)){
      createPage({
          path: "/products/page",
          matchPath: "/products/page/:id",
          component: path.resolve("src/pages/products/page.jsx")
      })
  }
}