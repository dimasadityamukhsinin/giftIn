import * as React from "react";
import Img from "gatsby-image";
import client from "../shopify";
import { useAppContext } from "../../context/store";
import * as styles from "../../styles/modules/productComponent.module.scss";

const ProductComponent = ({ dataProduct, data }) => {
  const appContext = useAppContext();

  const getCart = () => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'));
    if (dataCheckout && dataCheckout.email === localStorage.getItem('email')) {
      const lineItemsToAdd = [
        {
          variantId: dataProduct.variants[0].id,
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
            variantId: dataProduct.variants[0].id,
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

  const onGift = () => {
    getCart();
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'));
    client.checkout.fetch(dataCheckout.id).then((checkout) => {
      window.location.replace(checkout.webUrl);
    });
  }

  return (
    <div className="p-0" id={styles.productComponent}>
      <img
        src={dataProduct.images[0].src}
        alt={dataProduct.images[0].altText}
        height="200"
      />
      <div className="row m-0 px-3">
        <div className="col-7 d-flex flex-column p-0">
          <h4>{dataProduct.title}</h4>
          <a href="/" className="col text-center mt-3" href="/">
            <span>GIFT NOW</span>
          </a>
        </div>
        <div className="col d-flex flex-column justify-content-between align-items-end p-0">
          <button onClick={() => getCart()}>
            <Img fixed={data.bookmark.childImageSharp.fixed} alt="Bookmark" />
          </button>
          <span className="mb-2">{`Rp.${dataProduct.variants[0].price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
