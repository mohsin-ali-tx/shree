import React from "react";
import "./contactus.css";

const Contactus = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-md-12"
            style={{ textAlign: "center", marginBottom: "5%" }}
          >
            <h1>
              CONTACT <strong style={{ color: "green" }}>US</strong>{" "}
            </h1>
          </div>
        </div>

        <div className="row contact-form">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
            <div className="all-inputs">
              <input
                type="text"
                className="form-control"
                placeholder="     Your Name"
              ></input>
              <br></br>

              <input
                type="email"
                className="form-control"
                placeholder="     Email"
              ></input>
              <br></br>
              <input
                type="phone-number"
                className="form-control"
                placeholder="     Phone Number"
              ></input>
              <br></br>
              {/* <input
                type="text"
                className="form-control message-input"
                placeholder="     Your Message"
              ></input>
              <br></br> */}

              <textarea
                class="form-control"
                placeholder="     Your Message"
                rows="4"
              ></textarea>
            </div>
            <button className="btn btn-lg btn-success">Send</button>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13608.533938665574!2d74.23097937493951!3d31.49301455205626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391902686a66d6a1%3A0xd126df77dd9ca0d!2sThoker%20Niaz%20Baig%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1636037591454!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
