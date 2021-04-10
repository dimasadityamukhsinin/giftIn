const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const slug = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `);

  const category = await graphql(`
    {
      allShopifyCollection {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  `);

  slug.data.allShopifyProduct.edges.forEach((edge) => {
    createPage({
      path: `/products/${edge.node.handle}`,
      component: path.resolve("./src/templates/productDetail.jsx"),
      context: {
        slug: edge.node.handle,
      },
    });
  });

  if (category.data.allShopifyCollection.edges) {
    category.data.allShopifyCollection.edges.forEach((edge) => {
      createPage({
        path: `/products/category/${edge.node.handle}`,
        component: path.resolve("./src/templates/productCategory.jsx"),
        context: {
          category: edge.node.handle,
        },
      });
    });
  }
};
