import * as React from "react";
import * as styles from "../../styles/modules/products.module.scss";
import { Helmet } from "react-helmet";
import Navigation from "../../components/parts/navigation";
import { graphql } from "gatsby";
import client from "../../components/shopify";
import Footer from "../../components/parts/footer";
import LoadingProduct from "../../components/parts/loadingProduct";
import Pagination from "../../components/parts/Pagination";
import ProductComponent from "../../components/parts/productComponent";

const ProductPage = ({data, id}) => {
  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    client.product.fetchAll().then((products) => {
      // Do something with the products
      setProduct(products);
    });
  }, []);

  return (
    <>
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Products</title>
        </Helmet>
        <Navigation active="products" data={data} />
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
              {product ? (
                product.map((datas, id) => (
                  <ProductComponent
                    key={id}
                    dataProduct={datas}
                    data={data}
                  />
                ))
              ) : (
                <LoadingProduct />
              )}
            </div>
            <Pagination active={1}/>
          </div>
        </div>
      </main>
      <Footer data={data} />
    </>
  );
};

export const query = graphql`
  query {
    icon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bookmark: file(relativePath: { eq: "bookmark.png" }) {
      childImageSharp {
        fixed(width: 20, height: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cart: file(relativePath: { eq: "shopping-cart.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    exit: file(relativePath: { eq: "exit.png" }) {
      childImageSharp {
        fixed(width: 20, height: 20) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    facebook: file(relativePath: { eq: "facebook.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitter: file(relativePath: { eq: "twitter.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default ProductPage;
