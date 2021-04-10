import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/parts/navigation";
import client from "../components/shopify";
import * as styles from "../styles/modules/productDetail.module.scss";
import parse from "html-react-parser";
import { useAppContext } from "../context/store";
import { graphql } from "gatsby";
import Footer from "../components/parts/footer";

const ProductDetail = ({ data }) => {
  const [product] = useState(data.sanityProduct);
  const [cart, setCart] = useState(1);
  const appContext = useAppContext();

  const onChangeCart = (value) => {
    if (parseInt(value) <= 20) {
      setCart(value);
    } else if (!value) {
      setCart("");
    }
  };

  const onCart = () => {
    const dataCheckout = JSON.parse(localStorage.getItem("dataCheckout"));
    if (dataCheckout && dataCheckout.email === localStorage.getItem("email")) {
      const lineItemsToAdd = [
        {
          variantId: product.variantId,
          quantity: 1,
        },
      ];
      client.checkout
        .addLineItems(dataCheckout.id, lineItemsToAdd)
        .then((checkout) => {
          let jumlah = 0;
          checkout.lineItems.forEach((data) => {
            jumlah += data.quantity;
          });
          appContext.setQuantity(jumlah);
        });
    } else {
      client.checkout.create().then((checkout) => {
        const data = {
          id: checkout.id,
          email: localStorage.getItem("email"),
        };
        localStorage.setItem("dataCheckout", JSON.stringify(data));

        const lineItemsToAdd = [
          {
            variantId: product.variantId,
            quantity: 1,
          },
        ];
        client.checkout
          .addLineItems(checkout.id, lineItemsToAdd)
          .then((checkout) => {
            let jumlah = 0;
            checkout.lineItems.forEach((data) => {
              jumlah += data.quantity;
            });
            appContext.setQuantity(jumlah);
          });
      });
    }
  };

  const toPlainText = (blocks = []) => {
    return (
      blocks
        // loop through each block
        .map((block) => {
          // if it's not a text block with children,
          // return nothing
          if (block._type !== "block" || !block.children) {
            return "";
          }
          // loop through the children spans, and join the
          // text strings
          return block.children
            .map((child) => child.text)
            .join("")
            .replace("\n", "<br />");
        })
        // join the paragraphs leaving split by two linebreaks
        .join("\n\n")
    );
  };

  return (
    <>
    {
      console.log(product)
    }
      {/* <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{product.title}</title>
        </Helmet>
        <Navigation active="products" />
        <div className="container-fluid mt-4" id={styles.productDetail}>
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={product.image.asset.url} alt={product.title} />
              </div>
              <div className="col p-4">
                <h4>{product.title}</h4>
                <div className="row">
                  <div className="col-3">
                    <span>Type : {product.productType}</span>
                  </div>
                  <div className="col-3">
                    <span>Weight : {product.weight}Kg</span>
                  </div>
                </div>
                <span className="d-block p-4 my-4">Rp.{product.price}</span>
                <div className="mt-4">
                  <p>
                    {parse(
                      product.productDescription[0]._rawChildren
                        .map((child) => child.text)
                        .join("")
                        .replace("\n", "<br />")
                    )}
                  </p>
                </div>
                <div className="row mt-2 align-items-center">
                  <div className="col-3">
                    <span>Quantity</span>
                  </div>
                  <div className="col-2">
                    <input
                      type="text"
                      className="text-center"
                      value={cart}
                      onChange={(e) => onChangeCart(e.target.value)}
                    />
                  </div>
                  <div className="col-6">
                    <button onClick={() => onCart()}>
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main> */}
      <Footer />
    </>
  );
};

export const query = graphql`
  query ShopifyProductBySlug($slug: String!) {
    sanityProduct(slug: { current: { eq: $slug } }) {
      id
      title
      productId
      variantId
      productDescription {
        _rawChildren
      }
      price
      image {
        asset {
          url
        }
      }
      productType
      weight
    }
  }
`;

export default ProductDetail;
