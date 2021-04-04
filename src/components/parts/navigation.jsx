import * as React from "react";
import Img from "gatsby-image";
import * as styles from "../../styles/modules/nav.module.scss";
import firebase from "gatsby-plugin-firebase";
import client from "../shopify";
import { useAppContext } from "../../context/store";

const Navigation = ({ active, data }) => {
  const [login, setLogin] = React.useState(false);
  const appContext = useAppContext();

  const fetchCheckout = () => {
    const dataCheckout = JSON.parse(localStorage.getItem("dataCheckout"));
    if (dataCheckout && dataCheckout.email === localStorage.getItem("email")) {
      client.checkout.fetch(dataCheckout.id).then((checkout) => {
        let jumlah = 0;
        checkout.lineItems.forEach((data) => {
          jumlah += data.quantity;
        });
        appContext.setQuantity(jumlah);
      });
    }
  };

  const checkLogin = () => {
    const email = localStorage.getItem("email");
    if (email) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLogin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchCheckout();
    checkLogin();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-lg py-3">
        <a className="navbar-brand fw-bold" href="/">
          <Img
            fixed={data.icon.childImageSharp.fixed}
            className="me-1"
            alt="GiftIn"
          />
          GiftIn
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${active === "home" ? "active" : ""} ${
                  styles.navLink
                }`}
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className={`nav-link ${active === "products" ? "active" : ""} ${
                  styles.navLink
                }`}
                href="/products"
              >
                PRODUCTS
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className={`nav-link ${active === "services" ? "active" : ""} ${
                  styles.navLink
                }`}
                href="/"
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className={`nav-link ${
                  active === "contactus" ? "active" : ""
                } ${styles.navLink}`}
                href="/"
              >
                CONTACT US
              </a>
            </li>
          </ul>
          {login ? (
            <>
              <a href="/cart" className={`me-3 ${styles.cart}`}>
                <Img fixed={data.cart.childImageSharp.fixed} alt="Cart" />
                {appContext.quantity ? <span>{appContext.quantity}</span> : null}
              </a>
              <a
                onClick={handleLogout}
                className={`align-self-end ${styles.logout}`}
              >
                <Img fixed={data.exit.childImageSharp.fixed} alt="Logout" />
              </a>
            </>
          ) : (
            <a
              className={`text-center ${styles.signUpButton}`}
              href="/register"
            >
              <span>SIGN UP FREE</span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
