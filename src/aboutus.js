import React from "react";
import "./aboutus.css";

import img5 from "./images/about.jpg";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
          <button className="btn btn-lg btn-rounded btn-success">
            ABOUT US
          </button>
          <br></br>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages andIt is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 img-section">
          <div
            style={{
              width: "100%",
              justifyContent: "right",
              float: "right",
              paddingRight: "0px",
              marginRight: "0px",
            }}
          >
            <img src={img5} alt="About Us"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
