import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/parts/navigation";
import client from "../components/shopify";
import { graphql } from "gatsby";
import * as styles from "../styles/modules/productDetail.module.scss";
import ReactLoading from "react-loading";
import parse from "html-react-parser";
import NotFoundPage from "../pages/404";
import { useAppContext } from "../context/store";

const ProductDetail = ({ slug, data }) => {
  const [product, setProduct] = useState();
  const [cart, setCart] = useState(1);
  const appContext = useAppContext();

  const getData = () => {
    client.product.fetchByHandle(slug).then((data) => {
      if (!data) {
        setProduct("not found");
      } else {
        setProduct(data);
      }
    });
  };

  const onChangeCart = (value) => {
    if (parseInt(value) <= 20) {
      setCart(value);
    }else if(!value) {
      setCart("");
    }
  };

  const onCart = () => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'));
    console.log(product)
    if (dataCheckout && dataCheckout.email === localStorage.getItem('email')) {
      const lineItemsToAdd = [
        {
          variantId: product.variants[0].id,
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
            variantId: product.variants[0].id,
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
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {product === "not found" ? (
        <NotFoundPage />
      ) : !product ? (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>GiftIn</title>
          </Helmet>
          <div className="d-flex" style={{ height: "100vh" }}>
            <ReactLoading
              type="spin"
              color="black"
              height={60}
              width={60}
              className="m-auto"
            />
          </div>
        </>
      ) : (
        <main>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{product.title}</title>
          </Helmet>
          <Navigation active="products" data={data} />
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
                    <div className="col-3">
                      <span>Type : {product.type.name}</span>
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
      )}
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
