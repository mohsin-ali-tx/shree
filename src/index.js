import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import Home from "./home";
import Aboutus from "./aboutus";
import Carousal from "./carousal";
import Vegetable from "./vegetable";
import Testimonial from "./testimonial";
import Contactus from "./contactus";
import Footer from "./footer";
import Copyright from "./copyright";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
    <Carousal />
    <Aboutus />
    <Vegetable />
    <Testimonial />
    <Contactus />
    <Footer />
    <Copyright />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
