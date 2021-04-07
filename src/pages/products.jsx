import * as React from "react";
import * as styles from "../styles/modules/products.module.scss";
import { Helmet } from "react-helmet";
import Navigation from "../components/parts/navigation";
import Footer from "../components/parts/footer";
import LoadingProduct from "../components/parts/loadingProduct";
import Pagination from "../components/parts/Pagination";
import ProductComponent from "../components/parts/productComponent";
import { graphql, Link } from "gatsby";

const ProductPage = ({ data }) => {
  const [currentProduct, setCurrentPage] = React.useState(1);
  const [currentProducts, setCurrentProducts] = React.useState();
  const [productsPerPage] = React.useState(8);
  const [category] = React.useState(data.shopifyCategory.edges);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  React.useEffect(() => {
    const indexOfLastProduct = currentProduct * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    setCurrentProducts(
      data.shopifyProduct.edges.slice(indexOfFirstProduct, indexOfLastProduct)
    );
  }, []);

  return (
    <>
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Products</title>
        </Helmet>
        <Navigation active="products" />
        <div className="container-fluid mt-4" id={styles.products}>
          <div className="container">
            <div
              className="row justify-content-center mb-5"
              id={styles.popularGift}
            >
              <h3 className="text-center mb-5">Popular Gift Collection</h3>
              <div className="container justify-content-center">
                <Link className="col-2 text-center active" to="/products">
                  <span>New Gift's</span>
                </Link>
                {category.map((data, id) => (
                  <Link
                    className="col-2 text-center"
                    to={`/products/category/${data.node.handle}`}
                    key={id}
                  >
                    <span>{data.node.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="row pb-5" id={styles.gift}>
              {currentProducts ? (
                currentProducts.map((datas, id) => (
                  <ProductComponent key={id} dataProduct={datas.node} />
                ))
              ) : (
                <LoadingProduct />
              )}
            </div>
            {currentProducts ? (
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={currentProducts.length}
                paginate={paginate}
                currentProduct={currentProduct}
              />
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query {
    shopifyProduct: allShopifyProduct {
      edges {
        node {
          id
          availableForSale
          createdAt
          descriptionHtml
          handle
          images {
            id
            originalSrc
          }
          productType
          title
          variants {
            price
            id
          }
        }
      }
    }
    shopifyCategory: allShopifyCollection {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
`;

export default ProductPage;
