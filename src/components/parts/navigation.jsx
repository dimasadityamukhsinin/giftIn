import * as React from "react";
import Img from "gatsby-image";
import * as styles from "../../styles/modules/nav.module.scss";
import firebase from "gatsby-plugin-firebase";
import client from "../shopify";
import { useAppContext } from "../../context/store";
import { useStaticQuery, graphql, Link } from "gatsby";

const Navigation = ({ active }) => {
  const data = useStaticQuery(
    graphql`
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
    `
  );
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
        localStorage.removeItem('email');
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
        <Link className="navbar-brand fw-bold" to="/">
          <Img
            fixed={data.icon.childImageSharp.fixed}
            className="me-1"
            alt="GiftIn"
          />
          GiftIn
        </Link>
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id={styles.navbar}>
            <li className="nav-item">
              <Link
                className={`nav-link ${active === "home" ? "active" : ""} ${
                  styles.navLink
                }`}
                to="/"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                className={`nav-link ${active === "products" ? "active" : ""} ${
                  styles.navLink
                }`}
                to="/products"
              >
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                className={`nav-link ${active === "services" ? "active" : ""} ${
                  styles.navLink
                }`}
                to="/"
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                className={`nav-link ${
                  active === "contactus" ? "active" : ""
                } ${styles.navLink}`}
                to="/"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          {login ? (
            <>
              <Link to="/cart" className={`me-3 ${styles.cart}`}>
                <Img fixed={data.cart.childImageSharp.fixed} alt="Cart" />
                {appContext.quantity ? <span>{appContext.quantity}</span> : null}
              </Link>
              <a
                onClick={handleLogout}
                className={`align-self-end ${styles.logout}`}
              >
                <Img fixed={data.exit.childImageSharp.fixed} alt="Logout" />
              </a>
            </>
          ) : (
            <Link
              className={`text-center ${styles.signUpButton}`}
              to="/register"
            >
              <span>SIGN UP FREE</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
