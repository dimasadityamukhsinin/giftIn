import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/parts/navigation";
import client from "../components/shopify";
import * as styles from "../styles/modules/productDetail.module.scss";
import parse from "html-react-parser";
import { useAppContext } from "../context/store";
import { graphql } from "gatsby";

const ProductDetail = ({ data }) => {
  const [product] = useState(data.shopifyProduct);
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
          variantId: product.variants[0].id.split("__")[2],
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
            variantId: product.variants[0].id.split("__")[2],
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

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product.title}</title>
      </Helmet>
      <Navigation active="products" />
      <div className="container-fluid mt-4" id={styles.productDetail}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src={product.images[0].originalSrc}
                alt={product.images[0].title}
              />
            </div>
            <div className="col p-4">
              <h4>{product.title}</h4>
              <div className="row">
                <div className="col-3">
                  <span>Type : {product.productType}</span>
                </div>
                <div className="col-3">
                  <span>Weight : {product.variants[0].weight}Kg</span>
                </div>
              </div>
              <span className="d-block p-4 my-4">
                Rp.{product.variants[0].price}
              </span>
              <div className="mt-4">{parse(product.descriptionHtml)}</div>
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
    </main>
  );
};

export const query = graphql`
  query ShopifyProductById($id: String!) {
    shopifyProduct(id: { eq: $id }) {
      id
      title
      handle
      productType
      descriptionHtml
      vendor
      variants {
        id
        title
        price
        weight
      }
      images {
        id
        originalSrc
      }
    }
  }
`;

export default ProductDetail;
