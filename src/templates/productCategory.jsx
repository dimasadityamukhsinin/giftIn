import * as React from "react";
import * as styles from "../styles/modules/products.module.scss";
import { Helmet } from "react-helmet";
import Navigation from "../components/parts/navigation";
import Footer from "../components/parts/footer";
import LoadingProduct from "../components/parts/loadingProduct";
import Pagination from "../components/parts/pagination";
import ProductComponent from "../components/parts/productComponent";
import { graphql, Link } from "gatsby";

const ProductCategory = ({ data }) => {
  const [currentProduct, setCurrentPage] = React.useState(1);
  const [currentProducts, setCurrentProducts] = React.useState();
  const [productsPerPage] = React.useState(8);
  const [category] = React.useState(data.shopifyCategory.edges);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  React.useEffect(() => {
    const indexOfLastProduct = currentProduct * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    setCurrentProducts([
      data.sanityCollection.product.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      ),
    ]);
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
                <Link className="col-2 text-center" to="/products">
                  <span>New Gift's</span>
                </Link>
                {data.shopifyCategory.edges.length > 0
                  ? category.map((el, id) => (
                      <Link
                        className={`col-2 text-center ${
                          data.sanityCollection.slug === el.node.slug
                            ? `active`
                            : ``
                        }`}
                        to={`/products/category/${el.node.slug}`}
                        key={id}
                      >
                        <span>{el.node.title}</span>
                      </Link>
                    ))
                  : null}
              </div>
            </div>
            <div className="row pb-5" id={styles.gift}>
              {currentProducts ? (
                currentProducts[0].map((datas, id) =>
                  datas.image ? (
                    <ProductComponent key={id} dataProduct={datas} />
                  ) : null
                )
              ) : (
                <LoadingProduct />
              )}
            </div>
            {data.sanityCollection.product.length > 0 ? (
              currentProducts ? (
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={currentProducts.length}
                  paginate={paginate}
                  currentProduct={currentProduct}
                />
              ) : null
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query ShopyProductByCategory($category: String!) {
    sanityCollection(slug: { eq: $category }) {
      slug
      product {
        title
        price
        variantId
        image {
          asset {
            url
          }
        }
        slug {
          _key
          _type
          current
        }
      }
    }
    shopifyCategory: allSanityCollection {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export default ProductCategory;
