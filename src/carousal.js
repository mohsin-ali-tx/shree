import React from "react";
import { Carousel } from "react-bootstrap";

import "./carousal.css";
import img4 from "./images/img2.png";

const Carousal = () => {
  return (
    <div>
      <Carousel className="carousal1" controls={false}>
        <Carousel.Item>
          <img className="d-block " src={img4} alt="First slide" />

          <h3>Welcome to Shree</h3>
          <br></br>
          <h1>Vegetables Shop</h1>
          <br></br>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          {/* <Carousel.Caption>
            <h3>Welcome To Shree</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

            <button className="btn btn-lg btn-success">Submit Data</button>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block " src={img4} alt="Second slide" />

          <h3>Welcome to Shree</h3>
          <br></br>
          <h1>Vegetables Shop</h1>
          <br></br>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>

          {/* <Carousel.Caption className="c-data">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img4} alt="Third slide" />

          <h3>Welcome to Shree</h3>
          <br></br>
          <h1>Vegetables Shop</h1>
          <br></br>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>

          {/* <Carousel.Caption className="c-data">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousal;
