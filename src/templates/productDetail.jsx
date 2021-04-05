import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/parts/navigation";
import client from "../components/shopify";
import { graphql } from "gatsby";
import * as styles from "../styles/modules/productDetail.module.scss";
import ReactLoading from "react-loading";
import parse from "html-react-parser";

const ProductDetail = ({ slug, data }) => {
  const [product, setProduct] = useState();

  const getData = () => {
    client.product.fetchByHandle(slug).then((product) => {
      setProduct(product);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{!product ? "GiftIn" : product.title}</title>
        </Helmet>
        <Navigation active="products" data={data} />
        {product ? (
          <div className="container-fluid mt-4" id={styles.productDetail}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].altText}
                  />
                </div>
                <div className="col p-4">
                  <h4>{product.title}</h4>
                  <div className="row">
                      <div className="col-3"><span>Type : {product.type.name}</span></div>
                      <div className="col-3"><span>Weight : {product.variants[0].weight}Kg</span></div>
                  </div>
                  <span className="d-block p-4 my-4">
                    Rp.{product.variants[0].price}
                  </span>
                  <p className="mt-4">{parse(product.descriptionHtml)}</p>
                  <div className="row mt-4 align-items-center">
                    <div className="col-3">
                      <span>Quantity</span>
                    </div>
                    <div className="col-2">
                      <input type="text" />
                    </div>
                    <div className="col-6">
                      <button>
                        <span>ADD TO CART</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ReactLoading
            type="spin"
            color="black"
            height={60}
            width={60}
            className="m-auto"
          />
        )}
      </main>
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
  }
`;

export default ProductDetail;
