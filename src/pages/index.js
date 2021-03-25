import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import * as styles from "../styles/modules/home.module.scss";
import * as stylesFooter from "../styles/modules/footer.module.scss";

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <main>
        <title>GiftIn</title>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-lg py-3">
            <a className="navbar-brand fw-bold" href="/">
              <Img
                fixed={data.icon.childImageSharp.fixed}
                alt="GiftIn Icon"
                className="me-1"
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={`nav-link active ${styles.navLink}`} href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className={`nav-link ${styles.navLink}`} href="/">
                    PRODUCTS
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className={`nav-link ${styles.navLink}`} href="/">
                    SERVICES
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className={`nav-link ${styles.navLink}`} href="/">
                    CONTACT US
                  </a>
                </li>
              </ul>
              <a className={`text-center ${styles.signUpButton}`} href="/">
                <span>SIGN UP FREE</span>
              </a>
            </div>
          </div>
        </nav>
        <div className="container mb-5">
          <div className="row justify-content-between mt-3">
            <div className="d-flex justify-content-center flex-column col-md-6">
              <div className="col-md-9 mb-5">
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
                    className="col-2 d-flex justify-content-center align-items-end pb-3"
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
                    className="col-2 d-flex justify-content-center align-items-end pb-3"
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
                    className="col-2 d-flex justify-content-center align-items-end pb-3"
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
                    className="col-2 d-flex justify-content-center align-items-end pb-3"
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
                  <div className="col-5 mb-5 px-3 pt-4">
                    <h1>What Makes Us Different?</h1>
                    <p className="my-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed id lorem sapien. In ornare dui viverra tempor
                      fringilla. Integer eu mi sagittis, tincidunt nisl quis,
                      iaculis felis.
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
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
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
                <div className="row" id={styles.subscribe}>
                  <div className="col-7 align-self-center">
                    <h3>Want More Special Gift Ideas?</h3>
                    <p className="mt-4">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry. Industry's standard dummy text ever
                      since the 1500s.
                    </p>
                  </div>
                  <div className="col align-self-center">
                    <a className="text-center" href="/">
                      <span>SUBSCRIBE TO OUR NEWSLETTER</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer id={stylesFooter.footer}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col align-self-center">
              <a className="navbar-brand fw-bold" href="/">
                <Img
                  fixed={data.icon.childImageSharp.fixed}
                  alt="GiftIn Icon"
                  className="me-1"
                />
                GiftIn
              </a>
            </div>
            <div className="col align-self-center">
              <span>Copyright © 2021. Powered By WPDeveloper</span>
            </div>
            <div className="col d-flex align-self-center justify-content-end justify-self-end">
              <a className="me-2" href="/">
                <Img
                  fixed={data.facebook.childImageSharp.fixed}
                  alt="Facebook"
                />
              </a>
              <a className="me-2" href="/">
                <Img
                  fixed={data.twitter.childImageSharp.fixed}
                  alt="Twitter"
                />
              </a>
              <a className="me-2" href="/">
                <svg
                  height="30px"
                  viewBox="0 0 512 512"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0" />
                  <path d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0" />
                  <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
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
