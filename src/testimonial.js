import React from "react";
import { Carousel } from "react-bootstrap";
import img7 from "./images/tes.jpg";
import img8 from "./images/test_con.png";

import "./testimonial.css";

const Testimonial = () => {
  return (
    <div>
      <div className="container" id="c-testemonial">
        <div className="row t_h2">
          <div className="col-md-12 "></div>
          <h2>testimonial</h2>
        </div>
      </div>

      <div className="clients_red">
        <div
          className="container"
          style={{ backgroundColor: "green", width: "100%", height: "auto" }}
        >
          <Carousel className={"testimonial-slider"} controls={false}>
            <Carousel.Item>
              <div className="container">
                <div className="row top-row1" style={{ height: "100%" }}>
                  <div
                    className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 top-row2"
                    style={{
                      backgroundColor: "white",
                      marginTop: "8%",
                      marginLeft: "5%",
                      marginBottom: "15%",
                      width: "25%",
                    }}
                  >
                    <div className="images-div">
                      <img src={img7} className="top-image"></img>
                      <img src={img8} className="down-image"></img>
                    </div>
                  </div>
                  <div
                    className="col-md-8 col-lg-8 col-sm-12 ca-data"
                    // style={{ background: "green" }}
                  >
                    <h3>Jomono</h3>
                    <h6>Review</h6>

                    <div style={{ marginTop: "8%" }}>
                      <p style={{ fontSize: "17px" }}>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="container">
                <div className="row top-row1" style={{ height: "100%" }}>
                  <div
                    className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 top-row2"
                    style={{
                      backgroundColor: "white",
                      marginTop: "8%",
                      marginLeft: "5%",
                      marginBottom: "15%",
                      width: "25%",
                    }}
                  >
                    <div className="images-div">
                      <img src={img7} className="top-image"></img>
                      <img src={img8} className="down-image"></img>
                    </div>
                  </div>
                  <div
                    className="col-md-8 col-lg-8 col-sm-12 ca-data"
                    // style={{ background: "green" }}
                  >
                    <h3>Jomono</h3>
                    <h6>Review</h6>

                    <div style={{ marginTop: "8%" }}>
                      <p style={{ fontSize: "17px" }}>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container">
                <div className="row top-row1" style={{ height: "100%" }}>
                  <div
                    className="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12 top-row2"
                    style={{
                      backgroundColor: "white",
                      marginTop: "8%",
                      marginLeft: "5%",
                      marginBottom: "15%",
                      width: "25%",
                    }}
                  >
                    <div className="images-div">
                      <img src={img7} className="top-image"></img>
                      <img src={img8} className="down-image"></img>
                    </div>
                  </div>
                  <div
                    className="col-md-8 col-lg-8 col-sm-12 ca-data"
                    // style={{ background: "green" }}
                  >
                    <h3>Jomono</h3>
                    <h6>Review</h6>

                    <div style={{ marginTop: "8%" }}>
                      <p style={{ fontSize: "17px" }}>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

{
  /* <div className="row" >
<div className="col-md-12">
  <div className="titlepage">
    <h2>testimonial</h2>
  </div>
</div>
</div> */
}
