import Img from "gatsby-image";
import { graphql, navigate } from "gatsby";
import * as React from "react";
import * as styles from "../styles/modules/auth.module.scss";
import firebase from "gatsby-plugin-firebase";
import { Helmet } from "react-helmet";

const LoginPage = ({ data }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((_) => {
        localStorage.setItem("email", email);
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main id={styles.register}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <div className="row m-0 h-100">
        <div
          className={`col p-0 text-center d-flex justify-content-center justify-self-end align-items-center ${styles.displayNone}`}
        >
          <Img fixed={data.icon.childImageSharp.fixed} alt="GiftIn Icon" />
          <span>GiftIn</span>
        </div>
        <div
          className={`col p-0 ${styles.bgCustom} d-flex justify-content-center align-items-center flex-column w-100`}
        >
          <form className="w-75" onSubmit={handleSubmit}>
            <span>Login</span>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                name="email"
                className={`form-control ${styles.formControl}`}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
            </div>
            <button
              type="submit"
              className={`btn ${styles.btnCustom} btn-lg btn-block mt-3`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export const query = graphql`
  query {
    icon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default LoginPage;
