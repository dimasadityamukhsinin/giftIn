import * as React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/parts/navigation";
import * as styles from "../styles/modules/cart.module.scss";
import Footer from "../components/parts/footer";
import client from "../components/shopify";
import Close from "../components/icons/close";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";
import { useAppContext } from "../context/store";
import { navigate } from "gatsby-link";

const Cart = () => {
  const [dataCart, setCart] = React.useState(null);
  const appContext = useAppContext();

  const fetchCart = () => {
    const dataCheckout = JSON.parse(localStorage.getItem("dataCheckout"));
    if (dataCheckout && dataCheckout.email === localStorage.getItem("email")) {
      client.checkout.fetch(dataCheckout.id).then((checkout) => {
        setCart(checkout.lineItems);
      });
    }
  };

  const removeItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const dataCheckout = JSON.parse(localStorage.getItem("dataCheckout"));
        client.checkout
          .removeLineItems(dataCheckout.id, id)
          .then((checkout) => {
            // Do something with the updated checkout
            setCart(checkout.lineItems);
            let jumlah = 0;
            checkout.lineItems.forEach((data) => {
              jumlah += data.quantity;
            });
            appContext.setQuantity(jumlah);
          });
        Swal.fire("Deleted!", "success");
      }
    });
  };

  const updateItem = (id, itemAttributes) => {
    var index = dataCart.findIndex((x) => x.id === id);
    if (index === -1) {
      // handle error
    } else {
      setCart([
        ...dataCart.slice(0, index),
        Object.assign({}, dataCart[index], itemAttributes),
        ...dataCart.slice(index + 1),
      ]);
    }
  };

  const changeQuantity = (id, value) => {
    const dataCheckout = JSON.parse(localStorage.getItem("dataCheckout"));
    if (value) {
      if (parseInt(value) <= 20) {
        updateItem(id, { quantity: value });
        const lineItemsToUpdate = [{ id: id, quantity: parseInt(value) }];
        client.checkout.updateLineItems(dataCheckout.id, lineItemsToUpdate);
      }
    } else {
      updateItem(id, { quantity: value });
    }
  };

  const decQuantity = (id) => {
    const dataCheckout = JSON.parse(localStorage.getItem("dataCheckout"));
    const data = dataCart.find((el) => el.id === id);
    if (data.quantity !== "" || data.quantity !== "0") {
      if (data.quantity > 1) {
        updateItem(id, { quantity: data.quantity - 1 });

        const lineItemsToUpdate = [
          { id: id, quantity: parseInt(data.quantity - 1) },
        ];
        client.checkout.updateLineItems(dataCheckout.id, lineItemsToUpdate);
      }
    }
  };

  const increQuantity = (id) => {
    const dataCheckout = JSON.parse(localStorage.getItem("dataCheckout"));
    const data = dataCart.find((el) => el.id === id);
    if (data.quantity !== "" || data.quantity !== "0") {
      if (data.quantity < 20) {
        updateItem(id, { quantity: data.quantity + 1 });

        const lineItemsToUpdate = [
          { id: id, quantity: parseInt(data.quantity + 1) },
        ];
        client.checkout.updateLineItems(dataCheckout.id, lineItemsToUpdate);
      }
    }
  };

  const onCheckout = () => {
    const dataCheckout = JSON.parse(localStorage.getItem("dataCheckout"));
    if (dataCheckout && dataCheckout.email === localStorage.getItem("email")) {
      client.checkout.fetch(dataCheckout.id).then((checkout) => {
        window.location.href = checkout.webUrl;
      });
    }
  };

  React.useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) return navigate("/");
    fetchCart();
  }, []);

  return (
    <>
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cart</title>
        </Helmet>
        <Navigation />
        <div className="container-fluid mt-4" id={styles.cart}>
          <div className="container">
            <h2 className="text-center pb-5 m-0">Gift Cart</h2>
            {dataCart ? (
              dataCart.length > 0 ? (
                <>
                  <div className="row pb-4">
                    <div className="col-7">
                      <span>Product</span>
                    </div>
                    <div className="col text-center">
                      <span>Quantity</span>
                    </div>
                    <div className="col text-center">
                      <span>Sub Total</span>
                    </div>
                  </div>
                  {dataCart.map((data, id) =>
                    data.variant ? (
                      <>
                        <div className="col mt-3" id={styles.card} key={id}>
                          <div className="row py-4 align-items-center">
                            <div className="col-1 text-center">
                              <button onClick={() => removeItem(data.id)}>
                                <Close />
                              </button>
                            </div>
                            <div className="col-6">
                              <div className="row">
                                <div className="col-2">
                                  <img
                                    src={data.variant.image.src}
                                    alt={data.variant.image.altText}
                                    width="80"
                                    height="80"
                                  />
                                </div>
                                <div className="col">
                                  <h5>{data.title}</h5>
                                  <p>{`Rp.${data.variant.price}`}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="row justify-content-center">
                                <button
                                  onClick={() => decQuantity(data.id)}
                                  className="col-2 p-2 me-1 text-center"
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  className="col-2 p-2 text-center"
                                  value={data.quantity}
                                  onChange={(e) =>
                                    changeQuantity(data.id, e.target.value)
                                  }
                                />
                                <button
                                  onClick={() => increQuantity(data.id)}
                                  className="col-2 p-2 ms-1 text-center"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="col text-center">{`Rp.${
                              data.quantity * data.variant.price
                            }`}</div>
                          </div>
                        </div>

                        <div
                          className="row justify-content-end"
                          id={styles.cartTotal}
                        >
                          <div className="col-5">
                            <span className="d-block mb-3">CART TOTAL</span>
                            <div className="row p-4 pb-5">
                              <div className="col-8">
                                <div>
                                  <span>TOTAL</span>
                                </div>
                              </div>
                              <div className="col">
                                <div>
                                  <span>
                                    Rp.
                                    {dataCart.map(
                                      (data) =>
                                        data.quantity * data.variant.price
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => onCheckout()}
                              className="d-flex m-auto"
                            >
                              <span>PROCEED TO CHECKOUT</span>
                            </button>
                          </div>
                        </div>
                      </>
                    ) : null
                  )}
                </>
              ) : null
            ) : (
              <ReactLoading
                type="spin"
                color="black"
                height={60}
                width={60}
                className="m-auto"
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
