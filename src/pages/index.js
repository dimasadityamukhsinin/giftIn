import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import * as styles from "../styles/modules/home.module.scss";

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <title>GiftIn</title>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-lg pt-2 pb-2">
          <a className="navbar-brand fw-bold" href="/">
            <Img fixed={data.icon.childImageSharp.fixed} alt="GiftIn Icon" />
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
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">
                  PRODUCTS
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">
                  SERVICES
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">
                  CONTACT US
                </a>
              </li>
            </ul>
            <a
              className="btn btn-outline-danger"
              href="/"
              tabIndex="-1"
              aria-disabled="true"
            >
              SIGN UP FREE
            </a>
          </div>
        </div>
      </nav>
      <div className="container mb-5">
        <div className="row justify-content-between mt-3">
          <div className="d-flex justify-content-center flex-column col-md-6">
            <div className="col-md-9">
              <h3>The Best Gift Shop</h3>
              <h1 className={styles.subTitle}>
                Creating Happiness For Your Loved Ones
              </h1>
              <p className={styles.giftDescription + " my-4"}>
                Browse through some of the largest collection of gifts to
                brighton your day
              </p>
              <a className={styles.giftButton + " w-50 mt-5"} href="/">
                CHOOSE A GIFT
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <Img fluid={data.gift.childImageSharp.fluid} alt="Gift" />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4" id={styles.collection}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={`${styles.categoryGift} row`}>
                <a
                  className="col d-flex justify-content-center align-items-end pb-3"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  href="/"
                >
                  <span className="text-white">Birthday Gift's</span>
                </a>
                <a
                  className="col d-flex justify-content-center align-items-end pb-3"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1608755728617-aefab37d2edd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  href="/"
                >
                  <span className="text-white">Anniversary</span>
                </a>
                <a
                  className="col d-flex justify-content-center align-items-end pb-3"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  href="/"
                >
                  <span className="text-white">Special Gift</span>
                </a>
                <a
                  className="col d-flex justify-content-center align-items-end pb-3"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1607082349566-187342175e2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  href="/"
                >
                  <span className="text-white">50% Off</span>
                </a>
              </div>
              <div
                className="row justify-content-center mb-5"
                id={styles.popularGift}
              >
                <h3 className="text-center mb-5">Popular Gift Collection</h3>
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
              <div className="row mb-5" id={styles.gift}>
                <a className="p-0" href="/">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="product"
                  />
                  <div className="row m-0 px-3">
                    <div className="col-7 d-flex flex-column p-0">
                      <h4>Teddy Bear </h4>
                      <span>Earliest Delivery From 27 Nov</span>
                      <a className="col text-center mt-3" href="/">
                        <span>GIFT NOW</span>
                      </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-between align-items-end p-0">
                      <span>TES</span>
                      <span className="mb-2">Rp.120.000</span>
                    </div>
                  </div>
                </a>
                <a className="p-0" href="/">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="product"
                  />
                  <div className="row m-0 px-3">
                    <div className="col-7 d-flex flex-column p-0">
                      <h4>Teddy Bear </h4>
                      <span>Earliest Delivery From 27 Nov</span>
                      <a className="col text-center mt-3" href="/">
                        <span>GIFT NOW</span>
                      </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-between align-items-end p-0">
                      <span>TES</span>
                      <span className="mb-2">Rp.120.000</span>
                    </div>
                  </div>
                </a>
                <a className="p-0" href="/">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="product"
                  />
                  <div className="row m-0 px-3">
                    <div className="col-7 d-flex flex-column p-0">
                      <h4>Teddy Bear </h4>
                      <span>Earliest Delivery From 27 Nov</span>
                      <a className="col text-center mt-3" href="/">
                        <span>GIFT NOW</span>
                      </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-between align-items-end p-0">
                      <span>TES</span>
                      <span className="mb-2">Rp.120.000</span>
                    </div>
                  </div>
                </a>
                <a className="p-0" href="/">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="product"
                  />
                  <div className="row m-0 px-3">
                    <div className="col-7 d-flex flex-column p-0">
                      <h4>Teddy Bear </h4>
                      <span>Earliest Delivery From 27 Nov</span>
                      <a className="col text-center mt-3" href="/">
                        <span>GIFT NOW</span>
                      </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-between align-items-end p-0">
                      <span>TES</span>
                      <span className="mb-2">Rp.120.000</span>
                    </div>
                  </div>
                </a>
                <a className="p-0" href="/">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="product"
                  />
                  <div className="row m-0 px-3">
                    <div className="col-7 d-flex flex-column p-0">
                      <h4>Teddy Bear </h4>
                      <span>Earliest Delivery From 27 Nov</span>
                      <a className="col text-center mt-3" href="/">
                        <span>GIFT NOW</span>
                      </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-between align-items-end p-0">
                      <span>TES</span>
                      <span className="mb-2">Rp.120.000</span>
                    </div>
                  </div>
                </a>
                <a className="p-0" href="/">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="product"
                  />
                  <div className="row m-0 px-3">
                    <div className="col-7 d-flex flex-column p-0">
                      <h4>Teddy Bear </h4>
                      <span>Earliest Delivery From 27 Nov</span>
                      <a className="col text-center mt-3" href="/">
                        <span>GIFT NOW</span>
                      </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-between align-items-end p-0">
                      <span>TES</span>
                      <span className="mb-2">Rp.120.000</span>
                    </div>
                  </div>
                </a>
                <a className="p-0" href="/">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="product"
                  />
                  <div className="row m-0 px-3">
                    <div className="col-7 d-flex flex-column p-0">
                      <h4>Teddy Bear </h4>
                      <span>Earliest Delivery From 27 Nov</span>
                      <a className="col text-center mt-3" href="/">
                        <span>GIFT NOW</span>
                      </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-between align-items-end p-0">
                      <span>TES</span>
                      <span className="mb-2">Rp.120.000</span>
                    </div>
                  </div>
                </a>
                <a className="p-0" href="/">
                  <img
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80"
                    alt="product"
                  />
                  <div className="row m-0 px-3">
                    <div className="col-7 d-flex flex-column p-0">
                      <h4>Teddy Bear </h4>
                      <span>Earliest Delivery From 27 Nov</span>
                      <a className="col text-center mt-3" href="/">
                        <span>GIFT NOW</span>
                      </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-between align-items-end p-0">
                      <span>TES</span>
                      <span className="mb-2">Rp.120.000</span>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className={`${styles.viewAll} row justify-content-center mb-5`}
              >
                <a className="text-center" href="/">
                  <span>VIEW ALL</span>
                </a>
              </div>
              <div className="row mb-5" id={styles.specialize}>
                <h2 className="text-center mb-4">
                  We Don't Just Send Gifts. <br />
                  We Deliver Happiness.
                </h2>
                <p className="text-center mb-5">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Industry's standard dummy text ever since the 1500s.
                </p>
                <div className="col">
                  <div className="px-4 align-items-center" href="/">
                    <Img
                      fixed={data.iconCake.childImageSharp.fixed}
                      alt="Birthday Gift's"
                    />
                    <h4 className="mt-4">Birthday Gift's</h4>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed id lorem sapien. In ornare dui viverra tempor
                      fringilla.
                    </p>
                  </div>
                  <div className="px-4 align-items-center" href="/">
                    <Img
                      fixed={data.iconRing.childImageSharp.fixed}
                      alt="Anniversary Gift's"
                    />
                    <h4 className="mt-4">Anniversary Gift's</h4>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed id lorem sapien. In ornare dui viverra tempor
                      fringilla.
                    </p>
                  </div>
                  <div className="px-4 align-items-center" href="/">
                    <Img
                      fixed={data.iconBox.childImageSharp.fixed}
                      alt="Special Gift's"
                    />
                    <h4 className="mt-4">Special Gift's</h4>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed id lorem sapien. In ornare dui viverra tempor
                      fringilla.
                    </p>
                  </div>
                  <div className="px-4 align-items-center" href="/">
                    <Img
                      fixed={data.iconLoveGift.childImageSharp.fixed}
                      alt="Love Gift's"
                    />
                    <h4 className="mt-4">Love Gift's</h4>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed id lorem sapien. In ornare dui viverra tempor
                      fringilla.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mb-5" id={styles.different}>
                <div className="col-5 px-3 pt-4">
                  <h1>What Makes Us Different?</h1>
                  <p className="my-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    id lorem sapien. In ornare dui viverra tempor fringilla.
                    Integer eu mi sagittis, tincidunt nisl quis, iaculis felis.
                  </p>
                  <a className="text-center mt-5" href="/">
                    <span>ABOUT US</span>
                  </a>
                </div>
                <div className="col">
                  <iframe
                    width="560"
                    height="460"
                    src="https://www.youtube-nocookie.com/embed/MY5SatbZMAo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="row" id={styles.work}>
                <h1 className="text-center mb-4">How Does It Work?</h1>
                <p className="text-center mb-5">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. <br />
                  Industry's standard dummy text ever since the 1500s.
                </p>
                <div className="col me-3 py-5 px-4">
                  <h5>
                    Choose From Our Collection Of Popular Gifts For Every
                    Occasion
                  </h5>
                  <p className="mt-4">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. <br />
                    Industry's standard dummy text ever since the 1500s.
                  </p>
                  <a className="col text-center d-block mt-4" href="/">
                    <span>READ MORE</span>
                  </a>
                </div>
                <div className="col me-3 py-5 px-4">
                  <h5>
                    Choose From Our Collection Of Popular Gifts For Every
                    Occasion
                  </h5>
                  <p className="mt-4">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. <br />
                    Industry's standard dummy text ever since the 1500s.
                  </p>
                  <a className="col text-center d-block mt-4" href="/">
                    <span>READ MORE</span>
                  </a>
                </div>
                <div className="col py-5 px-4">
                  <h5>
                    Choose From Our Collection Of Popular Gifts For Every
                    Occasion
                  </h5>
                  <p className="mt-4">
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. <br />
                    Industry's standard dummy text ever since the 1500s.
                  </p>
                  <a className="col text-center d-block mt-4" href="/">
                    <span>READ MORE</span>
                  </a>
                </div>
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
    iconBlack: file(relativePath: { eq: "icon_black.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    iconCake: file(relativePath: { eq: "cake.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    iconRing: file(relativePath: { eq: "ring.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    iconBox: file(relativePath: { eq: "giftbox.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    iconLoveGift: file(relativePath: { eq: "heart-box.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gift: file(relativePath: { eq: "gift-boxes-white-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
