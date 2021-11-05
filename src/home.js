import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import img2 from "./images/logo.png";
import img3 from "./images/icon_b.png";
import "./home.css";

const Home = () => {
  const [show, setShow] = useState(false);

  const menuHandler = () => {
    setShow(!show);
  };

  return (
    <div>
      <Navbar
        // sticky="top"
        className="fixed-top"
        expand="lg"
        expanded={show}
        style={{ backgroundColor: "lightgray" }}
      >
        <Navbar.Brand className="brand">
          <img src={img2} style={{ marginLeft: "30%" }}></img>
        </Navbar.Brand>

        <Navbar.Toggle onClick={menuHandler} className="tog-btn" />

        <Navbar.Collapse>
          <Nav id="nav-links">
            <Nav.Link
              className="active nav-menu"
              href="#"
              onClick={menuHandler}
            >
              {" "}
              Home
            </Nav.Link>
            <hr></hr>

            <Nav.Link
              className="nav-menu"
              href="#c-aboutus"
              onClick={menuHandler}
            >
              {" "}
              About
            </Nav.Link>
            <hr></hr>
            <Nav.Link
              className="nav-menu"
              href="#c-vegetable"
              onClick={menuHandler}
            >
              {" "}
              Vegetable
            </Nav.Link>
            <hr></hr>
            <Nav.Link
              className="nav-menu"
              href="#c-testemonial"
              onClick={menuHandler}
            >
              {" "}
              Testemonial
            </Nav.Link>
            <hr></hr>
            <Nav.Link
              className="nav-menu"
              href="#c-contactus"
              onClick={menuHandler}
            >
              {" "}
              Contact Us
            </Nav.Link>
            <hr></hr>
            <Nav.Link
              className="nav-menu img-link"
              href="#"
              onClick={menuHandler}
            >
              <img src={img3}></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div onClick={menuHandler} />
    </div>
  );
};

export default Home;
