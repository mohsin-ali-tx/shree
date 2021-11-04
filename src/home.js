import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import img2 from "./images/logo.png";
import img3 from "./images/icon_b.png";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar
        // sticky="top"
        className="fixed-top"
        expand="lg"
        style={{ backgroundColor: "lightgray" }}
      >
        <Navbar.Brand className="brand">
          <img src={img2} style={{ marginLeft: "30%" }}></img>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav id="nav-links">
            <Nav.Link className="active nav-menu" href="#">
              {" "}
              Home
            </Nav.Link>
            <hr></hr>

            <Nav.Link className="nav-menu" href="#">
              {" "}
              About
            </Nav.Link>
            <hr></hr>
            <Nav.Link className="nav-menu" href="#">
              {" "}
              Vegetable
            </Nav.Link>
            <hr></hr>
            <Nav.Link className="nav-menu" href="#">
              {" "}
              Testemonial
            </Nav.Link>
            <hr></hr>
            <Nav.Link className="nav-menu" href="#">
              {" "}
              Contact Us
            </Nav.Link>
            <hr></hr>
            <Nav.Link className="nav-menu img-link" href="#">
              <img src={img3}></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Home;
