import * as React from "react";
import * as styles from "../styles/modules/products.module.scss";
import { Helmet } from "react-helmet";
import Navigation from "../components/parts/navigation";
import client from "../components/shopify";
import Footer from "../components/parts/footer";
import LoadingProduct from "../components/parts/loadingProduct";
import Pagination from "../components/parts/Pagination";
import ProductComponent from "../components/parts/productComponent";

const ProductPage = () => {
  const [currentProduct, setCurrentPage] = React.useState(1);
  const [currentProducts, setCurrentProducts] = React.useState();
  const [productsPerPage] = React.useState(8);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  React.useEffect(() => {
    client.product.fetchAll().then((products) => {
      const indexOfLastProduct = currentProduct * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      setCurrentProducts(
        products.slice(indexOfFirstProduct, indexOfLastProduct)
      );
    });
  }, []);

  return (
    <>
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Products</title>
        </Helmet>
        <Navigation active="products"/>
        <div className="container-fluid mt-4" id={styles.products}>
          <div className="container">
            <div
              className="row justify-content-center mb-5"
              id={styles.popularGift}
            >
              <h3 className="text-center mb-5">Popular Gift Collection</h3>
              <div className="container justify-content-center">
                <a className="col-2 text-center active" href="/">
                  <span>New Gift's</span>
                </a>
                <a className="col-2 text-center" href="/">
                  <span>Top Rated Gift's</span>
                </a>
                <a className="col-2 text-center" href="/">
                  <span>Trending Gift's</span>
                </a>
                <a className="col-2 text-center" href="/">
                  <span>Best Offer Gift's</span>
                </a>
              </div>
            </div>
            <div className="row pb-5" id={styles.gift}>
              {currentProducts ? (
                currentProducts.map((datas, id) => (
                  <ProductComponent key={id} dataProduct={datas} />
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
      <Footer/>
    </>
  );
};

export default ProductPage;
