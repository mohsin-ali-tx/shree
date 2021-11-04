import React from "react";
import vgmd from "./vegetable.module.css";
import img6 from "./images/v1.jpg";
import img7 from "./images/v2.jpg";

const Vegetable = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className={vgmd.titlepage}>
            FRESH <strong className={vgmd.llow}>VEGETABLE</strong>
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5 col-lg-5 col-xl-5 col-sm-12">
          <div className={vgmd.vegetable_shop}>
            <h3>Best Vegetables Shop</h3>
            <br></br>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages andIt is a long established fact that a reader
              will be distracted{" "}
            </p>
          </div>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
          <div className={vgmd.vegetable_img2}>
            <figure>
              <img src={img6} alt="#" />
            </figure>
            <span className={vgmd.vgspan}>01</span>
          </div>
        </div>

        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
          <div className={(vgmd.vegetable_img, vgmd.margin_top)}>
            <figure>
              <img src={img7} alt="#" style={{ width: "100%" }} />
            </figure>
            <span className={vgmd.span2}>02</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vegetable;
