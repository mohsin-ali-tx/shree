import React from "react";
import "./footer.css";
import img9 from "./images/logo2.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#3b3b3b" }}>
        <div className="container">
          <a href="#">
            <img
              src={img9}
              style={{
                border: "2px solid white",
                marginTop: "5%",
                padding: "10px 25px",
                marginBottom: "5%",
              }}
            ></img>
          </a>

          <div className="row" style={{ color: "white", paddingBottom: "5%" }}>
            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
              <h1>Address</h1>
              <br></br>
              <p>It is a long established fact</p>
              <p>that a reader will be</p>
              <p>(+71 1234567890)</p>
              <p>demo@gmail.com</p>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12 social-a">
              <h1>Social Link</h1>
              <br></br>

              <p>
                <a href="#">Twitter</a>
              </p>
              <p>
                {" "}
                <a href="#">Facebook</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#">Instagram</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#">LinkedIn</a>{" "}
              </p>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-xs-12">
              <h1>Newsletter</h1>

              <form class="news">
                <input
                  className="newslatter"
                  placeholder="Enter your email"
                  type="text"
                  name=" Enter your email"
                />
                <button className="submit-button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
