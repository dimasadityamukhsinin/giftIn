//SCSS
import "./src/styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//Firebase
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

import React from "react";
import { AppWrapper } from "./src/context/store";
export const wrapRootElement = ({ element }) => (
  <AppWrapper>{element}</AppWrapper>
);
